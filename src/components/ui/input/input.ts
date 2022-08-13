import template from './input.tpl.pug';

import { EventsType } from '@types';
import Block from '@utils/Block';

export interface IInput {
  classes?: string;
  type: string;
  name: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  minlength?: number;
  maxlength?: number;
  pattern?: string;
  validate?: boolean;
  events?: EventsType;
}

class Input extends Block {
  constructor(props: IInput) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

export default Input;
