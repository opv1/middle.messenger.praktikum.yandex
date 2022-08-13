import template from './link.tpl.pug';

import Block from '@utils/Block';

interface ILink {
  url: string;
  name?: string;
  block?: Block;
}

class Link extends Block {
  constructor(props: ILink) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

export default Link;
