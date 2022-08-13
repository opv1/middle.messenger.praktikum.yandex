import { TEvents } from '@types';

import Block from '@utils/Block';

import template from './input.tpl.pug';

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
  events?: TEvents;
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
