import template from './profile-password.tpl.pug';

import arrowIcon from '@assets/arrow-left.svg';
import ProfileChangePassword from '@components/profile/profile-change-password/profile-change-password';
import Icon from '@components/ui/icon/icon';
import UserController from '@controllers/UserController';
import { getDataObject } from '@helpers';
import { IPasswordFormData } from '@types';
import Block from '@utils/Block';

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
