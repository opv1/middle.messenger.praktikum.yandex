import template from './chat-form.tpl.pug';

import arrowIcon from '@assets/arrow-left.svg';
import Button from '@components/ui/button/button';
import Icon from '@components/ui/icon/icon';
import Input from '@components/ui/input/input';
import { REGEXP_MESSAGE } from '@constants';
import { EventsType } from '@types';
import Block from '@utils/Block';

interface IMessageForm {
  events?: EventsType;
}

class ChatForm extends Block {
  constructor(props: IMessageForm) {
    super(props);
  }

  protected initChildren(): void {
    this.childrens.input = new Input({
      type: 'text',
      name: 'message',
      placeholder: 'Сообщение',
      classes: 'chat__form__text',
      required: true,
      pattern: REGEXP_MESSAGE,
    });

    this.childrens.button = new Button({
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
