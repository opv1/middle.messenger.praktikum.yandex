import template from './auth-signin.tpl.pug';

import FormField from 'src/components/auth/auth-field/auth-field';
import Button from 'src/components/ui/button/button';
import { REGEXP_LOGIN, REGEXP_PASSWORD } from 'src/constants';
import router from 'src/router';
import { Endpoints } from 'src/types';
import { EventsType } from 'src/types';
import Block from 'src/utils/Block';

interface ISigninForm {
  events?: EventsType;
}

class SigninForm extends Block {
  constructor(props: ISigninForm) {
    super(props);
  }

  protected initChildren(): void {
    this.childrens.loginField = new FormField({
      inputProps: {
        type: 'text',
        name: 'login',
        required: true,
        minlength: 3,
        maxlength: 20,
        pattern: REGEXP_LOGIN,
      },
      label: 'Логин',
      name: 'login',
      validate: true,
    });

    this.childrens.passwordField = new FormField({
      inputProps: {
        type: 'password',
        name: 'password',
        required: true,
        minlength: 8,
        maxlength: 40,
        pattern: REGEXP_PASSWORD,
      },
      label: 'Пароль',
      name: 'password',
      validate: true,
    });

    this.childrens.signinButton = new Button({
      type: 'submit',
      name: 'Войти',
      text: 'Войти',
    });

    this.childrens.signupButton = new Button({
      type: 'button',
      name: 'signup',
      text: 'Нет аккаунта?',
      events: {
        click: (event) => this.clickHandler(event),
      },
    });
  }

  clickHandler(event: Event) {
    event.preventDefault();
    router.go(Endpoints.SIGNUP);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

export default SigninForm;
