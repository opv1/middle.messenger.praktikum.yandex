import { TEvents } from '@/types';

import Block from '@/utils/Block';

import Button from '@/ui/button/button';
import Icon from '@/ui/icon/icon';
import Input from '@/ui/input/input';

import template from './chat-form.tpl.pug';

import arrowLeft from '@/assets/arrow-left.svg';
import { regexpMessage } from '@/constants';

interface IMessageForm {
  events?: TEvents;
}

class MessageForm extends Block {
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
      pattern: regexpMessage,
    });

    this.childrens.button = new Button({
      type: 'submit',
      name: 'send',
      classes: 'chat__form__send',
      block: new Icon({
        id: arrowLeft,
        width: 24,
        height: 24,
      }),
    });
  }

  render() {
    return this.compile(template, {});
  }
}

export default MessageForm;
