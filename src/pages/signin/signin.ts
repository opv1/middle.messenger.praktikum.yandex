import template from './signin.tpl.pug';

import SigninForm from 'src/components/auth/auth-signin/auth-signin';
import AuthController from 'src/controllers/AuthController';
import { getDataObject } from 'src/helpers';
import { ISigninData } from 'src/types';
import Block from 'src/utils/Block';

class SigninPage extends Block {
  protected initChildren() {
    this.childrens.form = new SigninForm({
      events: {
        submit: (event) => this.submitHandler(event),
      },
    });
  }

  async submitHandler(event: Event) {
    try {
      event.preventDefault();

      const form = event.target as HTMLFormElement;
      const formData = new FormData(form);
      const data = getDataObject(formData);

      await AuthController.signIn(data as unknown as ISigninData);
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return this.compile(template, {});
  }
}

export default SigninPage;
