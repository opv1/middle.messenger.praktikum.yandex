import template from './auth-signin.tpl.pug';

import FormField from '@components/auth/auth-field/auth-field';
import { REGEXP_LOGIN, REGEXP_PASSWORD } from '@constants';
import { TEvents } from '@types';
import Button from '@components/ui/button/button';
import Link from '@components/ui/link/link';
import Block from '@utils/Block';

interface ISigninForm {
  method: string;
  events?: TEvents;
}

class SigninForm extends Block {
  constructor(props: ISigninForm) {
    super(props);
  }

  protected initChildren(): void {
    this.childrens.login = new FormField({
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

    this.childrens.password = new FormField({
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

    this.childrens.button = new Button({
      type: 'submit',
      name: 'Войти',
      text: 'Войти',
    });

    this.childrens.link = new Link({
      url: '/signup/signup.html',
      name: 'Нет аккаунта?',
    });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

export default SigninForm;
