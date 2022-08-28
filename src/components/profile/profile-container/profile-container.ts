import template from './profile-container.tpl.pug';

import Button from '@components/ui/button/button';
import Link from '@components/ui/link/link';
import AuthController from '@controllers/AuthController';
import { withUser } from '@hoc/withUser';
import { IProfileItem, IUser } from '@types';
import Block from '@utils/Block';

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
        click: () => AuthController.logout(),
      },
    });
  }

  render() {
    return this.compile(template, {
      items: getProfileItems(this.props),
      ...this.props,
    });
  }
}

export default withUser(ProfileContainer);
