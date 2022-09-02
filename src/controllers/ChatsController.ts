import UserController from './UserController';

import ChatsAPI from '@api/ChatsAPI';
import SocketConnection from '@api/SocketConnection';
import { getDateChats } from '@helpers/getDateChats';
import store from '@store';
import { IChatCreate, IChatItem, IChatUsersRequest, IUser } from '@types';

class ChatsController {
  private api: ChatsAPI;
  private socket: SocketConnection | null;

  constructor() {
    this.api = new ChatsAPI();
    this.socket = null;
  }

  async setSocketConnection(userId: string, chatId: string) {
    try {
      const { token } = (await this.api.getToken(chatId)) as unknown as Record<string, unknown>;

      const endpoint = `${userId}/${chatId}/${token}`;

      this.socket = new SocketConnection(endpoint);
    } catch (error: any) {
      console.error(error);
    }
  }

  async getChats() {
    try {
      const chats = await this.api.getChats({ offset: 0, limit: 50 });

      getDateChats(chats as unknown as IChatItem[]);

      store.set('chats', chats);
    } catch (error) {
      console.error(error);
    }
  }

  async addChat(data: IChatCreate) {
    try {
      await this.api.addChat(data);

      this.getChats();
    } catch (error) {
      console.error(error);
    }
  }

  async addUser(data: Record<string, unknown>) {
    try {
      const { login, chatId } = data;

      const user = (await UserController.searchUser({
        login: login as string,
      })) as unknown as IUser[];

      const requestData: IChatUsersRequest = {
        users: [user[0].id as number],
        chatId: chatId as number,
      };

      await this.api.addUser(requestData);
    } catch (error) {
      console.error(error);
    }
  }

  async deleteUser(data: Record<string, unknown>) {
    try {
      const { login, chatId } = data;

      const user = (await UserController.searchUser({
        login: login as string,
      })) as unknown as IUser[];

      const requestData: IChatUsersRequest = {
        users: [user[0].id as number],
        chatId: chatId as number,
      };

      await this.api.deleteUser(requestData);
    } catch (error) {
      console.log(error);
    }
  }

  async deleteChat(id: string) {
    try {
      await this.api.deleteChat(id);
      await this.getChats();

      store.set('activeChat.chat.id', null);
    } catch (error) {
      console.log(error);
    }
  }

  async sendMessage(message: string) {
    try {
      if (this.socket) {
        this.socket.sendMessage(message);
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default new ChatsController();
