import template from './chat-footer.tpl.pug';

import attachmentIcon from 'src/assets/icon-attachment.svg';
import ChatForm from 'src/components/chat/chat-form/chat-form';
import Icon from 'src/components/ui/icon/icon';
import ChatsController from 'src/controllers/ChatsController';
import { getDataObject } from 'src/helpers';
import { withActiveChat } from 'src/hoc/withActiveChat';
import Block from 'src/utils/Block';

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

  async submitHandler(event: Event) {
    try {
      event.preventDefault();

      const form = event.target as HTMLFormElement;
      const formData = new FormData(form);
      const data = getDataObject(formData);

      await ChatsController.sendMessage(String(data.message));

      form.reset();
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return this.compile(template, { ...this.props.chat });
  }
}

export default withActiveChat(ChatFooter);
