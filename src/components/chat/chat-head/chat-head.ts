import template from './chat-head.tpl.pug';

import arrowIcon from 'src/assets/arrow-right.svg';
import ChatSearch from 'src/components/chat/chat-search/chat-search';
import Icon from 'src/components/ui/icon/icon';
import Link from 'src/components/ui/link/link';
import { getDataObject } from 'src/helpers';
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
      name: 'Профиль',
      block: new Icon({
        src: arrowIcon,
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
