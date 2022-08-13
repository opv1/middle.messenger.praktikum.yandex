import template from './chat-head.tpl.pug';

import arrowRight from '@assets/arrow-right.svg';
import ChatSearch from '@components/chat/chat-search/chat-search';
import Icon from '@components/ui/icon/icon';
import Link from '@components/ui/link/link';
import { getDataObject } from '@helpers';
import Block from '@utils/Block';

class ChatHead extends Block {
  protected initChildren() {
    this.childrens.chatSearch = new ChatSearch({
      events: {
        submit: (event) => this.submitHandler(event),
      },
    });

    this.childrens.link = new Link({
      classes: 'chat__link',
      url: '/profile/profile.html',
      name: 'Профиль',
      block: new Icon({
        src: arrowRight,
      }),
    });
  }

  submitHandler(event: Event) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    console.log(getDataObject(formData));
  }

  render() {
    return this.compile(template, {});
  }
}

export default ChatHead;
