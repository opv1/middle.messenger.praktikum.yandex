import { TEvents } from '@/types';

import Block from '@/utils/Block';

import Button from '@/ui/button/button';
import Link from '@/ui/link/link';

import template from './auth-signin.tpl.pug';

import FormField from '@/components/auth/auth-field/auth-field';
import { regexpLogin, regexpPassword } from '@/constants';

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
        pattern: regexpLogin,
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
        pattern: regexpPassword,
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
