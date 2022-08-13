import template from './chat-footer.tpl.pug';

import attachmentIcon from '@assets/icon-attachment.svg';
import ChatForm from '@components/chat/chat-form/chat-form';
import Icon from '@components/ui/icon/icon';
import { getDataObject } from '@helpers';
import Block from '@utils/Block';

class ChatFooter extends Block {
  protected initChildren() {
    this.childrens.chatForm = new ChatForm({
      events: {
        submit: (event) => this.submitHandler(event),
      },
    });

    this.childrens.icon = new Icon({
      src: attachmentIcon,
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
