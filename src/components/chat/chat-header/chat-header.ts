import template from './chat-header.tpl.pug';

import settingsIcon from '@assets/icon-settings.svg';
import Button from '@components/ui/button/button';
import Icon from '@components/ui/icon/icon';
import Input from '@components/ui/input/input';
import ChatsController from '@controllers/ChatsController';
import { withActiveChat } from '@hoc/withActiveChat';
import Block from '@utils/Block';

class ChatHeader extends Block {
  protected initChildren() {
    this.childrens.settingsIcon = new Icon({
      src: settingsIcon,
    });

    this.childrens.loginUser = new Input({
      id: 'inputLogin',
      type: 'text',
      name: 'loginUser',
      placeholder: 'Введите логин',
    });

    this.childrens.addUserButton = new Button({
      classes: 'button__small',
      type: 'button',
      name: 'deleteUser',
      text: 'Добавить пользователя',
      events: {
        click: () => this.addUserHandler(this.props.chat.id),
      },
    });

    this.childrens.deleteUserButton = new Button({
      classes: 'button__small',
      type: 'button',
      name: 'deleteUser',
      text: 'Удалить пользователя',
      events: {
        click: () => this.deleteUserHandler(this.props.chat.id),
      },
    });

    this.childrens.deleteChatButton = new Button({
      classes: 'button__small',
      type: 'button',
      name: 'deleteUser',
      text: 'Удалить чат',
      events: {
        click: () => this.deleteChatHandler(this.props.chat.id),
      },
    });
  }

  addUserHandler(chatId: string) {
    const inputName = document.getElementById('inputLogin') as HTMLInputElement;
    const inputValue = inputName!.value;

    if (inputValue !== '') {
      const data = { login: inputValue, chatId };
      ChatsController.addUser(data);
      inputName.value = '';
    }
  }

  deleteUserHandler(chatId: string) {
    const inputName = document.getElementById('inputLogin') as HTMLInputElement;
    const inputValue = inputName!.value;

    if (inputValue !== '') {
      const data = { login: inputValue, chatId };
      ChatsController.deleteUser(data);
      inputName.value = '';
    }
  }

  deleteChatHandler(chatId: string) {
    ChatsController.deleteChat(chatId);
  }

  render() {
    return this.compile(template, { ...this.props.chat });
  }
}

export default withActiveChat(ChatHeader);
