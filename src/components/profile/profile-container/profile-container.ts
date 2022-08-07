import { IProfileItem } from '@/types';

import Block from '@/utils/Block';

import Link from '@/ui/link/link';

import template from './profile-container.tpl.pug';

interface IProfile {
  data: IProfileItem[];
}

class Profile extends Block {
  constructor(props: IProfile) {
    super(props);
  }

  protected initChildren() {
    this.childrens.changeInfoLink = new Link({
      url: '/profile-change-info/profile-change-info.html',
      name: 'Изменить данные',
    });

    this.childrens.changePasswordLink = new Link({
      url: '/profile-change-password/profile-change-password.html',
      name: 'Изменить пароль',
    });

    this.childrens.exitLink = new Link({
      url: '/',
      name: 'Выйти',
    });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

export default Profile;
