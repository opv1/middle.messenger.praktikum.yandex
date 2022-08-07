import Block from '@/utils/Block';

import template from './button.tpl.pug';

interface IButton {
  classes?: string;
  type: string;
  name: string;
  text?: string;
  block?: Block;
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