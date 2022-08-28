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

  submitHandler(event: Event) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = getDataObject(formData);

    UserController.updateProfile(data as unknown as IUser);
  }

  render() {
    return this.compile(template, {});
  }
}

export default ProfileInfoPage;
