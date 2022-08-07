import Block from '@/utils/Block';

import Icon from '@/ui/icon/icon';
import Link from '@/ui/link/link';

import template from './chat-head.tpl.pug';

import arrowRight from '@/assets/arrow-right.svg';
import ChatSearch from '@/components/chat/chat-search/chat-search';
import { getDataObject } from '@/helpers';

class ChatHead extends Block {
  protected initChildren() {
    this.childrens.link = new Link({
      url: '/profile/profile.html',
      name: 'Профиль',
      block: new Icon({
        id: arrowRight,
        width: 6,
        height: 10,
      }),
    });

    this.childrens.chatSearch = new ChatSearch({
      events: {
        submit: (event) => this.submitHandler(event),
      },
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
