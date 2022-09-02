import template from './profile-info.tpl.pug';

import arrowIcon from '@assets/arrow-left.svg';
import ProfileChangeInfo from '@components/profile/profile-change-info/profile-change-info';
import Icon from '@components/ui/icon/icon';
import UserController from '@controllers/UserController';
import { getDataObject } from '@helpers';
import { IUser } from '@types';
import Block from '@utils/Block';

class ProfileInfoPage extends Block {
  protected initChildren() {
    this.childrens.profileChangeInfo = new ProfileChangeInfo({
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
