import template from './link.tpl.pug';
import { EventsType } from 'src/types';
import Block from 'src/utils/Block';

interface ILink {
  classes?: string;
  url: string;
  text?: string;
  block?: Block;
  events?: EventsType;
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
