import template from './chat-active.tpl.pug';

import ChatFooter from '@components/chat/chat-footer/chat-footer';
import ChatHead from '@components/chat/chat-head/chat-head';
import ChatHeader from '@components/chat/chat-header/chat-header';
import ChatList from '@components/chat/chat-list/chat-list';
import ChatView from '@components/chat/chat-view/chat-view';
import { data, messages } from '@constants';
import Block from '@utils/Block';
import renderDOM from '@utils/renderDOM';

class ChatPage extends Block {
  constructor() {
    super();
  }

  protected initChildren() {
    this.childrens.chatHead = new ChatHead();

    this.childrens.chatList = new ChatList({
      items: data,
    });

    this.childrens.chatHeader = new ChatHeader();

    this.childrens.chatView = new ChatView({
      data: messages,
    });

    this.childrens.chatFooter = new ChatFooter();
  }

  render() {
    return this.compile(template, {});
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const page = new ChatPage();

  renderDOM('#app', page);
});
