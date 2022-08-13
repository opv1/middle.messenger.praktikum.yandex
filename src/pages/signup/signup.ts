import Block from '@utils/Block';
import renderDOM from '@utils/renderDOM';

import template from './signup.tpl.pug';

import SignupForm from '@components/auth/auth-signup/form-signup';
import { getDataObject } from '@helpers';

class SignupPage extends Block {
  constructor() {
    super();
  }

  protected initChildren() {
    this.childrens.form = new SignupForm({
      method: 'POST',
      events: {
        submit: (event) => this.submitHandler(event),
      },
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
  const page = new SignupPage();

  renderDOM('#app', page);
});
