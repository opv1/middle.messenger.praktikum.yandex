import template from './chat-header.tpl.pug';

import settingsIcon from 'src/assets/icon-settings.svg';
import Button from 'src/components/ui/button/button';
import Icon from 'src/components/ui/icon/icon';
import Input from 'src/components/ui/input/input';
import ChatsController from 'src/controllers/ChatsController';
import { withActiveChat } from 'src/hoc/withActiveChat';
import Block from 'src/utils/Block';

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

  async addUserHandler(chatId: string) {
    try {
      const inputName = document.getElementById('inputLogin') as HTMLInputElement;
      const inputValue = inputName!.value;

      if (inputValue !== '') {
        const data = { login: inputValue, chatId };

        await ChatsController.addUser(data);

        inputName.value = '';
      }
    } catch (error) {
      console.error(error);
    }
  }

  async deleteUserHandler(chatId: string) {
    try {
      const inputName = document.getElementById('inputLogin') as HTMLInputElement;
      const inputValue = inputName!.value;

      if (inputValue !== '') {
        const data = { login: inputValue, chatId };

        await ChatsController.deleteUser(data);

        inputName.value = '';
      }
    } catch (error) {
      console.error(error);
    }
  }

  async deleteChatHandler(chatId: string) {
    try {
      await ChatsController.deleteChat(chatId);
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return this.compile(template, { ...this.props.chat });
  }
}

export default withActiveChat(ChatHeader);
