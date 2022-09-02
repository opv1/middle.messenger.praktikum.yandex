/* eslint-disable no-restricted-syntax */
import { BASE_URL_SOCKET } from '@constants';
import { getDateMessage } from '@helpers/getDateMessage';
import { sortMessages } from '@helpers/sortMessages';
import store from '@store';

export default class SocketConnection {
  protected socket;
  protected timerId: any;

  constructor(endpoint: string) {
    this.socket = new WebSocket(`${BASE_URL_SOCKET}${endpoint}`);
    this.timerId;

    this.init();
  }

  private init() {
    this.setListeners();
  }

  private setListeners() {
    this.socket.addEventListener('open', () => {
      clearInterval(this.timerId);
      this.setPing();
      this.getPrevMessages('0');
    });

    this.socket.addEventListener('close', (event) => {
      if (event.wasClean) {
        store.set('activeChat.messages', []);
      } else {
        throw new Error('Обрыв соединения');
      }

      console.log(`Код: ${event.code} | Причина: ${event.reason}`);
    });

    this.socket.addEventListener('message', (event) => {
      const data = JSON.parse(event.data);

      if (data && data.type !== 'error' && data.type !== 'pong' && data.type !== 'user connected') {
        sortMessages(data);

        getDateMessage(data);

        if (Array.isArray(data)) {
          store.set('activeChat.messages', data);
        } else {
          store.set('activeChat.messages', [...store.getState().activeChat.messages, data]);
        }
      }
    });

    this.socket.addEventListener('error', (event) => {
      console.log('Ошибка', event);
    });
  }

  public sendMessage(message: string) {
    this.socket.send(
      JSON.stringify({
        content: message,
        type: 'message',
      })
    );
  }

  public getPrevMessages(count: string) {
    this.socket.send(
      JSON.stringify({
        content: count,
        type: 'get old',
      })
    );
  }

  private setPing() {
    this.timerId = setInterval(() => {
      this.socket.send(JSON.stringify({ type: 'ping' }));
    }, 2000);
  }
}
