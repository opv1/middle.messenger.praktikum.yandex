import template from './chat-form.tpl.pug';

import arrowIcon from 'src/assets/arrow-left.svg';
import Button from 'src/components/ui/button/button';
import Icon from 'src/components/ui/icon/icon';
import Input from 'src/components/ui/input/input';
import { REGEXP_MESSAGE } from 'src/constants';
import { EventsType } from 'src/types';
import Block from 'src/utils/Block';

interface IMessageForm {
  events?: EventsType;
}

class ChatForm extends Block {
  constructor(props: IMessageForm) {
    super(props);
  }

  protected initChildren(): void {
    this.childrens.messageInput = new Input({
      type: 'text',
      name: 'message',
      placeholder: 'Сообщение',
      classes: 'chat__form__text',
      required: true,
      pattern: REGEXP_MESSAGE,
    });

    this.childrens.sendButton = new Button({
      type: 'submit',
      name: 'send',
      classes: 'chat__form__send',
      block: new Icon({
        src: arrowIcon,
      }),
    });
  }

  render() {
    return this.compile(template, {});
  }
}

export default ChatForm;
