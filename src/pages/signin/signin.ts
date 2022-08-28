import template from './signin.tpl.pug';

import SigninForm from '@components/auth/auth-signin/auth-signin';
import AuthController from '@controllers/AuthController';
import { getDataObject } from '@helpers';
import { ISigninData } from '@types';
import Block from '@utils/Block';

class SigninPage extends Block {
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
    const data = getDataObject(formData);

    AuthController.signIn(data as unknown as ISigninData);
  }

  render() {
    return this.compile(template, {});
  }
}

export default SigninPage;
