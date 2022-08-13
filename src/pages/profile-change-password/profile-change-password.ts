import Block from '@utils/Block';
import renderDOM from '@utils/renderDOM';

import Icon from '@ui/icon/icon';

import template from './profile-change-password.tpl.pug';

import arrowLeft from '@assets/arrow-left.svg';
import ProfileChangePassword from '@components/profile/profile-change-password/profile-change-password';
import { getDataObject } from '@helpers';

class ProfilePage extends Block {
  constructor() {
    super();
  }

  protected initChildren() {
    this.childrens.profileChangePassword = new ProfileChangePassword({
      events: {
        submit: (event) => this.submitHandler(event),
      },
    });

    this.childrens.icon = new Icon({
      id: arrowLeft,
      width: 24,
      height: 24,
    });
  }

  submitHandler(event: Event) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    console.log(getDataObject(formData));
  }

  render() {
    return this.compile(template, {});
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const page = new ProfilePage();

  renderDOM('#app', page);
});
