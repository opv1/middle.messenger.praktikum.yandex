import template from './icon.tpl.pug';

import Block from '@utils/Block';

interface IIcon {
  classes?: string;
  src: string;
}

class Icon extends Block {
  constructor(props: IIcon) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

export default Icon;
