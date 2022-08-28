import template from './chat.tpl.pug';

import ChatFooter from '@components/chat/chat-footer/chat-footer';
import ChatHead from '@components/chat/chat-head/chat-head';
import ChatHeader from '@components/chat/chat-header/chat-header';
import ChatList from '@components/chat/chat-list/chat-list';
import ChatView from '@components/chat/chat-view/chat-view';
import ChatsController from '@controllers/ChatsController';
import store from '@store';
import Block from '@utils/Block';

class ChatPage extends Block {
  protected initChildren() {
    this.childrens.chatHead = new ChatHead();

    this.childrens.chatList = new ChatList({
      events: {
        click: (event: Event) => this.clickHandler(event),
      },
    });

    this.childrens.chatHeader = new ChatHeader({});

    this.childrens.chatView = new ChatView({});

    this.childrens.chatFooter = new ChatFooter({});
  }

  clickHandler(event: Event) {
    event.preventDefault();

    const element = event.target as HTMLElement;

    if (element.classList.value.includes('chat__item')) {
      const button = document.querySelector('.chat__item') as HTMLButtonElement;

      const chatId = button.id;

      const state = store.getState();

      const chats = state.chats?.filter((item) => item.id === Number(chatId));
      const currentChat = chats[0];

      const userId = String(state.currentUser?.id);

      if (chatId && userId) {
        store.set('activeChat.chat', currentChat);
        ChatsController.setSocketConnection(userId, chatId);
      }
    }
  }

  render() {
    ChatsController.getChats();
    return this.compile(template, {});
  }
}

export default ChatPage;
