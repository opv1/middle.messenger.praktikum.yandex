import template from './profile-info.tpl.pug';

import arrowIcon from 'src/assets/arrow-left.svg';
import ProfileChangeInfo from 'src/components/profile/profile-change-info/profile-change-info';
import Icon from 'src/components/ui/icon/icon';
import UserController from 'src/controllers/UserController';
import { getDataObject } from 'src/helpers';
import { IUser } from 'src/types';
import Block from 'src/utils/Block';

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
