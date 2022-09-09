import template from './chat-view.tpl.pug';

import { withActiveChat } from 'src/hoc/withActiveChat';
import { withUser } from 'src/hoc/withUser';
import { IMessageItem } from 'src/types';
import Block from 'src/utils/Block';

interface IMessageView {
  data: IMessageItem[];
}

class ChatView extends Block {
  constructor(props: IMessageView) {
    super(props);
  }

  render() {
    return this.compile(template, { data: this.props.messages, ...this.props });
  }
}

export default withActiveChat(withUser(ChatView));
