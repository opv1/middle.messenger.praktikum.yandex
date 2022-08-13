import template from './index.tpl.pug';

import SigninForm from '@components/auth/auth-signin/auth-signin';
import { getDataObject } from '@helpers';
import Block from '@utils/Block';
import renderDOM from '@utils/renderDOM';

class IndexPage extends Block {
  constructor() {
    super();
  }

  protected initChildren() {
    this.childrens.form = new SigninForm({
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
  const page = new IndexPage();

  renderDOM('#app', page);
});
