import template from './chat-search.tpl.pug';

import searchIcon from 'src/assets/icon-search.svg';
import Icon from 'src/components/ui/icon/icon';
import { EventsType } from 'src/types';
import Block from 'src/utils/Block';

interface ISearch {
  events?: EventsType;
}

class ChatSearch extends Block {
  constructor(props: ISearch) {
    super(props);
  }

  protected initChildren() {
    this.childrens.searchIcon = new Icon({
      src: searchIcon,
    });
  }

  render() {
    return this.compile(template, {});
  }
}

export default ChatSearch;
