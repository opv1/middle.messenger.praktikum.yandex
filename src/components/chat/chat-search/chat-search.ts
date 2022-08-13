import { TEvents } from '@types';

import Block from '@utils/Block';

import Icon from '@ui/icon/icon';

import template from './chat-search.tpl.pug';

import iconSearch from '@assets/icon-search.svg';

interface ISearch {
  events?: TEvents;
}

class ChatSearch extends Block {
  constructor(props: ISearch) {
    super(props);
  }

  protected initChildren() {
    this.childrens.icon = new Icon({
      id: iconSearch,
      width: 20,
      height: 20,
    });
  }

  render() {
    return this.compile(template, {});
  }
}

export default ChatSearch;
