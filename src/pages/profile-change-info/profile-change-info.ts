import template from './profile-change-info.tpl.pug';

import arrowLeft from '@assets/arrow-left.svg';
import ProfileChangeInfo from '@components/profile/profile-change-info/profile-change-info';
import Icon from '@components/ui/icon/icon';
import { getDataObject } from '@helpers';
import Block from '@utils/Block';
import renderDOM from '@utils/renderDOM';

class ProfilePage extends Block {
  constructor() {
    super();
  }

  protected initChildren() {
    this.childrens.profileChangeInfo = new ProfileChangeInfo({
      events: {
        submit: (event) => this.submitHandler(event),
      },
    });

    this.childrens.icon = new Icon({
      src: arrowLeft,
    });
  }

  submitHandler(event: Event) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    console.log(getDataObject(formData));
  }

  render() {
    return this.compile(template, {});
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const page = new ProfilePage();

  renderDOM('#app', page);
});
