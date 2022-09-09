import template from './chat-head.tpl.pug';

import ChatSearch from 'src/components/chat/chat-search/chat-search';
import Link from 'src/components/ui/link/link';
import { getDataObject } from 'src/helpers';
import router from 'src/router';
import { Endpoints } from 'src/types';
import Block from 'src/utils/Block';

class ChatHead extends Block {
  protected initChildren() {
    this.childrens.chatSearch = new ChatSearch({
      events: {
        submit: (event) => this.submitHandler(event),
      },
    });

    this.childrens.profileLink = new Link({
      classes: 'chat__link',
      url: '/profile',
      text: 'Профиль',
      events: {
        click: (event) => this.clickHandler(event),
      },
    });
  }

  submitHandler(event: Event) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    console.log(getDataObject(formData));
  }

  clickHandler(event: Event) {
    event.preventDefault();
    router.go(Endpoints.PROFILE);
  }

  render() {
    return this.compile(template, {});
  }
}

export default ChatHead;
