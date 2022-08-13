import template from './chat.tpl.pug';

import ChatHead from '@components/chat/chat-head/chat-head';
import ChatList from '@components/chat/chat-list/chat-list';
import { data } from '@constants';
import Block from '@utils/Block';
import renderDOM from '@utils/renderDOM';

class ChatPage extends Block {
  constructor() {
    super();
  }

  protected initChildren() {
    this.childrens.chatHeader = new ChatHead();

    this.childrens.chatList = new ChatList({
      items: data,
    });
  }

  render() {
    return this.compile(template, {});
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const page = new ChatPage();

  renderDOM('#app', page);
});
