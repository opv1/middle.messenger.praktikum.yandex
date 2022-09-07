import template from './profile.tpl.pug';

import arrowIcon from 'src/assets/arrow-left.svg';
import ProfileContainer from 'src/components/profile/profile-container/profile-container';
import Icon from 'src/components/ui/icon/icon';
import Block from 'src/utils/Block';

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
