import template from './profile.tpl.pug';

import arrowLeft from '@assets/arrow-left.svg';
import Profile from '@components/profile/profile-container/profile-container';
import Icon from '@components/ui/icon/icon';
import { profileInfo } from '@constants';
import Block from '@utils/Block';
import renderDOM from '@utils/renderDOM';

class ProfilePage extends Block {
  constructor() {
    super();
  }

  protected initChildren() {
    this.childrens.profile = new Profile({
      data: profileInfo,
    });

    this.childrens.icon = new Icon({
      src: arrowLeft,
    });
  }

  render() {
    return this.compile(template, {});
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const page = new ProfilePage();

  renderDOM('#app', page);
});
