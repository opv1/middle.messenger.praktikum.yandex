import template from './button.tpl.pug';

import { EventsType } from '@types';
import Block from '@utils/Block';

interface IButton {
  classes?: string;
  type: string;
  name: string;
  text?: string;
  block?: Block;
  events?: EventsType;
}

class Button extends Block {
  constructor(props: IButton) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

export default Button;
