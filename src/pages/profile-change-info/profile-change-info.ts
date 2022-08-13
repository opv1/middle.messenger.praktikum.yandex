import template from './profile-change-info.tpl.pug';

import arrowLeft from '@assets/arrow-left.svg';
import ProfileChangeInfo from '@components/profile/profile-change-info/profile-change-info';
import { getDataObject } from '@helpers';
import Icon from '@ui/icon/icon';
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
      id: arrowLeft,
      width: 24,
      height: 24,
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
