import template from './chat-footer.tpl.pug';

import iconClip from '@assets/icon-attachment.svg';
import MessageForm from '@components/chat/chat-form/chat-form';
import { getDataObject } from '@helpers';
import Icon from '@components/ui/icon/icon';
import Block from '@utils/Block';

class ChatFooter extends Block {
  protected initChildren() {
    this.childrens.messageForm = new MessageForm({
      events: {
        submit: (event) => this.submitHandler(event),
      },
    });

    this.childrens.icon = new Icon({
      id: iconClip,
      width: 32,
      height: 32,
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

export default ChatFooter;
