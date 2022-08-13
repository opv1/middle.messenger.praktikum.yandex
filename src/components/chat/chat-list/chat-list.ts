import template from './chat-list.tpl.pug';

import { IChatItem } from '@types';
import Block from '@utils/Block';

interface IChatList {
  items: IChatItem[];
}

class ChatList extends Block {
  constructor(props: IChatList) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

export default ChatList;
