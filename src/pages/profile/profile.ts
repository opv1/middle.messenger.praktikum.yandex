import template from './profile.tpl.pug';

import ProfileContainer from 'src/components/profile/profile-container/profile-container';
import Link from 'src/components/ui/link/link';
import router from 'src/router';
import { Endpoints } from 'src/types';
import Block from 'src/utils/Block';

class ProfilePage extends Block {
  protected initChildren() {
    this.childrens.profileContainer = new ProfileContainer({});

    this.childrens.backLink = new Link({
      classes: 'profile__back',
      url: '/chat',
      text: '<-',
      events: {
        click: (event) => this.clickHandler(event),
      },
    });
  }

  clickHandler(event: Event) {
    event.preventDefault();
    router.go(Endpoints.CHAT);
  }

  render() {
    return this.compile(template, {});
  }
}

export default ProfilePage;
