import template from './signup.tpl.pug';

import SignupForm from '@components/auth/auth-signup/form-signup';
import AuthController from '@controllers/AuthController';
import { getDataObject } from '@helpers';
import { ISignUpFormData } from '@types';
import Block from '@utils/Block';

class SignupPage extends Block {
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
    const data = getDataObject(formData);

    AuthController.signUp(data as unknown as ISignUpFormData);
  }

  render() {
    return this.compile(template, {});
  }
}

export default SignupPage;
