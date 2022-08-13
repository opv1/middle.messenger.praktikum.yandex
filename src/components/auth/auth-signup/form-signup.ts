import { TEvents } from '@types';

import Block from '@utils/Block';

import Button from '@ui/button/button';
import Link from '@ui/link/link';

import template from './form-signup.tpl.pug';

import FormField from '@components/auth/auth-field/auth-field';
import { REGEXP_EMAIL, REGEXP_LOGIN, REGEXP_NAME, REGEXP_PASSWORD, REGEXP_PHONE } from '@constants';

interface ISignupForm {
  method: string;
  events?: TEvents;
}

class SignupForm extends Block {
  constructor(props: ISignupForm) {
    super(props);
  }

  protected initChildren(): void {
    this.childrens.email = new FormField({
      inputProps: {
        type: 'email',
        name: 'email',
        required: true,
        pattern: REGEXP_EMAIL,
      },
      label: 'Почта',
      name: 'email',
      validate: true,
    });

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

    this.childrens.firstName = new FormField({
      inputProps: {
        type: 'text',
        name: 'first_name',
        required: true,
        pattern: REGEXP_NAME,
      },
      label: 'Имя',
      name: 'first_name',
      validate: true,
    });

    this.childrens.secondName = new FormField({
      inputProps: {
        type: 'text',
        name: 'second_name',
        required: true,
        pattern: REGEXP_NAME,
      },
      label: 'Фамилия',
      name: 'second_name',
      validate: true,
    });

    this.childrens.phone = new FormField({
      inputProps: {
        type: 'tel',
        name: 'phone',
        required: true,
        pattern: REGEXP_PHONE,
      },
      label: 'Телефон',
      name: 'phone',
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

    this.childrens.passwordCheck = new FormField({
      inputProps: {
        type: 'password',
        name: 'passwordCheck',
        required: true,
        minlength: 8,
        maxlength: 40,
        pattern: REGEXP_PASSWORD,
      },
      label: 'Пароль (еще раз)',
      name: 'passwordCheck',
      validate: true,
    });

    this.childrens.button = new Button({
      type: 'submit',
      name: 'Зарегистрироваться',
      text: 'Зарегистрироваться',
    });

    this.childrens.link = new Link({
      url: '/index.html',
      name: 'Войти',
    });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

export default SignupForm;
