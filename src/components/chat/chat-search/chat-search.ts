import template from './chat-search.tpl.pug';

import iconSearch from '@assets/icon-search.svg';
import { TEvents } from '@types';
import Icon from '@components/ui/icon/icon';
import Block from '@utils/Block';

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
