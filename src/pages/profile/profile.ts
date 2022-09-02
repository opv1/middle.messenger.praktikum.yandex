import template from './profile.tpl.pug';

import arrowIcon from '@assets/arrow-left.svg';
import ProfileContainer from '@components/profile/profile-container/profile-container';
import Icon from '@components/ui/icon/icon';
import Block from '@utils/Block';

class ProfilePage extends Block {
  protected initChildren() {
    this.childrens.profileContainer = new ProfileContainer({});

    this.childrens.backIcon = new Icon({
      src: arrowIcon,
    });
  }

  render() {
    return this.compile(template, {});
  }
}

export default ProfilePage;
