import template from './profile-info.tpl.pug';

import ProfileChangeInfo from 'src/components/profile/profile-change-info/profile-change-info';
import Link from 'src/components/ui/link/link';
import UserController from 'src/controllers/UserController';
import { getDataObject } from 'src/helpers';
import router from 'src/router';
import { Endpoints } from 'src/types';
import { IUser } from 'src/types';
import Block from 'src/utils/Block';

class ProfileInfoPage extends Block {
  protected initChildren() {
    this.childrens.profileChangeInfo = new ProfileChangeInfo({
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

      await UserController.updateProfile(data as unknown as IUser);
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return this.compile(template, {});
  }
}

export default ProfileInfoPage;
