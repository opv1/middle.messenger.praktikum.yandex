import template from './chat-list.tpl.pug';

import Button from '@components/ui/button/button';
import Input from '@components/ui/input/input';
import ChatsController from '@controllers/ChatsController';
import { withChats } from '@hoc/withChats';
import { EventsType, IChatItem } from '@types';
import { IChatCreate } from '@types';
import Block from '@utils/Block';

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

  clickHandler(event: Event) {
    event.preventDefault();

    const inputName = document.getElementById('nameChat') as HTMLInputElement;
    const inputValue = inputName!.value;

    if (inputValue !== '') {
      const data = { title: inputValue };
      ChatsController.addChat(data as unknown as IChatCreate);
      inputName.value = '';
    }
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

export default withChats(ChatList);
