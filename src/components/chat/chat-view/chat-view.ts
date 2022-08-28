import template from './chat-view.tpl.pug';

import { withActiveChat } from '@hoc';
import { withUser } from '@hoc/withUser';
import { IMessageItem } from '@types';
import Block from '@utils/Block';

interface IMessageView {
  data: IMessageItem[];
}

class ChatView extends Block {
  constructor(props: IMessageView) {
    super(props);
  }

  render() {
    console.log(this.props.messages);

    return this.compile(template, { data: this.props.messages, ...this.props });
  }
}

export default withActiveChat(withUser(ChatView));
