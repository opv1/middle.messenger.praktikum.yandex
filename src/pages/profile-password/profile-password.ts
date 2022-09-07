import template from './profile-password.tpl.pug';

import arrowIcon from 'src/assets/arrow-left.svg';
import ProfileChangePassword from 'src/components/profile/profile-change-password/profile-change-password';
import Icon from 'src/components/ui/icon/icon';
import UserController from 'src/controllers/UserController';
import { getDataObject } from 'src/helpers';
import { IPasswordFormData } from 'src/types';
import Block from 'src/utils/Block';

class ProfilePasswordPage extends Block {
  protected initChildren() {
    this.childrens.profileChangePassword = new ProfileChangePassword({
      events: {
        submit: (event: Event) => this.submitHandler(event),
      },
    });

    this.childrens.icon = new Icon({
      src: arrowIcon,
    });
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
