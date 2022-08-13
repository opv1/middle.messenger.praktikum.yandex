import template from './chat-search.tpl.pug';

import searchIcon from '@assets/icon-search.svg';
import Icon from '@components/ui/icon/icon';
import { EventsType } from '@types';
import Block from '@utils/Block';

interface ISearch {
  events?: EventsType;
}

class ChatSearch extends Block {
  constructor(props: ISearch) {
    super(props);
  }

  protected initChildren() {
    this.childrens.icon = new Icon({
      src: searchIcon,
    });
  }

  render() {
    return this.compile(template, {});
  }
}

export default ChatSearch;
