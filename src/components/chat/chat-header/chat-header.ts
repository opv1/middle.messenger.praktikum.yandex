import template from './chat-header.tpl.pug';

import iconSettings from '@assets/icon-settings.svg';
import Icon from '@components/ui/icon/icon';
import Block from '@utils/Block';

class ChatHeader extends Block {
  protected initChildren() {
    this.childrens.icon = new Icon({
      src: iconSettings,
    });
  }

  render() {
    return this.compile(template, {});
  }
}

export default ChatHeader;
