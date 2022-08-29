import template from './chat-footer.tpl.pug';

import attachmentIcon from '@assets/icon-attachment.svg';
import ChatForm from '@components/chat/chat-form/chat-form';
import Icon from '@components/ui/icon/icon';
import ChatsController from '@controllers/ChatsController';
import { getDataObject } from '@helpers';
import { withActiveChat } from '@hoc/withActiveChat';
import Block from '@utils/Block';

class ChatFooter extends Block {
  protected initChildren() {
    this.childrens.chatForm = new ChatForm({
      events: {
        submit: (event) => this.submitHandler(event),
      },
    });

    this.childrens.attachmentIcon = new Icon({
      src: attachmentIcon,
    });
  }

  submitHandler(event: Event) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = getDataObject(formData);

    ChatsController.sendMessage(String(data.message));
    form.reset();
  }

  render() {
    return this.compile(template, { ...this.props.chat });
  }
}

export default withActiveChat(ChatFooter);
