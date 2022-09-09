import template from './chat-list.tpl.pug';

import Button from 'src/components/ui/button/button';
import Input from 'src/components/ui/input/input';
import ChatsController from 'src/controllers/ChatsController';
import { withChats } from 'src/hoc/withChats';
import { EventsType, IChatItem } from 'src/types';
import { IChatCreate } from 'src/types';
import Block from 'src/utils/Block';

interface IChatList {
  chats?: IChatItem[];
  events?: EventsType;
}

class ChatList extends Block {
  constructor(props: IChatList) {
    super(props);
  }

  protected initChildren(): void {
    this.childrens.chatInput = new Input({
      id: 'nameChat',
      classes: 'input__none',
      type: 'text',
      name: 'name',
      placeholder: 'Введите название чата',
    });

    this.childrens.addButton = new Button({
      type: 'button',
      name: 'addChat',
      text: 'Добавить новый чат',
      events: {
        click: (event) => this.clickHandler(event),
      },
    });
  }

  async clickHandler(event: Event) {
    try {
      event.preventDefault();

      const inputName = document.getElementById('nameChat') as HTMLInputElement;
      const inputValue = inputName!.value;

      if (inputValue !== '') {
        const data = { title: inputValue };

        await ChatsController.addChat(data as unknown as IChatCreate);

        inputName.value = '';
      }
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

export default withChats(ChatList);
