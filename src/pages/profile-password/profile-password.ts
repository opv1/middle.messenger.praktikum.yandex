import template from './profile-password.tpl.pug';

import ProfileChangePassword from 'src/components/profile/profile-change-password/profile-change-password';
import Link from 'src/components/ui/link/link';
import UserController from 'src/controllers/UserController';
import { getDataObject } from 'src/helpers';
import router from 'src/router';
import { Endpoints } from 'src/types';
import { IPasswordFormData } from 'src/types';
import Block from 'src/utils/Block';

class ProfilePasswordPage extends Block {
  protected initChildren() {
    this.childrens.profileChangePassword = new ProfileChangePassword({
      events: {
        submit: (event: Event) => this.submitHandler(event),
      },
    });

    this.childrens.backLink = new Link({
      classes: 'profile__back',
      url: '/profile',
      text: '<-',
      events: {
        click: (event) => this.clickHandler(event),
      },
    });
  }

  clickHandler(event: Event) {
    event.preventDefault();
    router.go(Endpoints.PROFILE);
  }

  async submitHandler(event: Event) {
    try {
      event.preventDefault();

      const form = event.target as HTMLFormElement;
      const formData = new FormData(form);
      const data = getDataObject(formData);

      await UserController.updatePassword(data as unknown as IPasswordFormData);
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return this.compile(template, {});
  }
}

export default ProfilePasswordPage;
