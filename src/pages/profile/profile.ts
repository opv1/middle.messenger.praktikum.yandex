import template from './profile.tpl.pug';

import ProfileContainer from 'src/components/profile/profile-container/profile-container';
import Button from 'src/components/ui/button/button';
import router from 'src/router';
import { Endpoints } from 'src/types';
import Block from 'src/utils/Block';

class ProfilePage extends Block {
  protected initChildren() {
    this.childrens.profileContainer = new ProfileContainer({});

    this.childrens.backButton = new Button({
      classes: 'profile__back',
      type: 'button',
      name: 'back',
      text: '<-',
      events: {
        click: (event) => this.clickHandlerBack(event),
      },
    });
  }

  clickHandlerBack(event: Event) {
    event.preventDefault();
    router.go(Endpoints.CHAT);
  }

  render() {
    return this.compile(template, {});
  }
}

export default ProfilePage;
