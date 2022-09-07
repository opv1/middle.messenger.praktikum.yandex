import template from './profile-container.tpl.pug';

import Button from 'src/components/ui/button/button';
import Link from 'src/components/ui/link/link';
import AuthController from 'src/controllers/AuthController';
import { withUser } from 'src/hoc/withUser';
import { IProfileItem, IUser } from 'src/types';
import Block from 'src/utils/Block';

interface IProfile {
  data: IProfileItem[];
}

export const getProfileItems = (props: IUser): IProfileItem[] => {
  const items: IProfileItem[] = [];

  const addItem = (name: string, value?: string) => {
    items.push({ name, value });
  };

  Object.keys(props).forEach((key) => {
    if (key === 'email') {
      addItem('Почта', props[key]);
    }
    if (key === 'login') {
      addItem('Логин', props[key]);
    }
    if (key === 'first_name') {
      addItem('Имя', props[key]);
    }
    if (key === 'second_name') {
      addItem('Фамилия', props[key]);
    }
    if (key === 'display_name') {
      addItem('Имя в чате', props[key]);
    }
    if (key === 'phone') {
      addItem('Телефон', props[key]);
    }
  });

  return items;
};

class ProfileContainer extends Block {
  constructor(props: IProfile) {
    super(props);
  }

  protected initChildren() {
    this.childrens.changeInfoLink = new Link({
      url: '/info',
      name: 'Изменить данные',
    });

    this.childrens.changePasswordLink = new Link({
      url: '/password',
      name: 'Изменить пароль',
    });

    this.childrens.logoutLink = new Button({
      type: 'button',
      name: 'logout',
      text: 'Выйти',
      events: {
        click: (event) => this.clickHandler(event),
      },
    });
  }

  async clickHandler(event: Event) {
    try {
      event.preventDefault();

      await AuthController.logout();
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return this.compile(template, {
      items: getProfileItems(this.props),
      ...this.props,
    });
  }
}

export default withUser(ProfileContainer);
