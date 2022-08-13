import template from './chat-header.tpl.pug';

import settingsIcon from '@assets/icon-settings.svg';
import Icon from '@components/ui/icon/icon';
import Block from '@utils/Block';

class ChatHeader extends Block {
  protected initChildren() {
    this.childrens.settingsIcon = new Icon({
      src: settingsIcon,
    });
  }

  render() {
    return this.compile(template, {});
  }
}

export default ChatHeader;
