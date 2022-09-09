import template from './form-signup.tpl.pug';

import FormField from 'src/components/auth/auth-field/auth-field';
import Button from 'src/components/ui/button/button';
import Link from 'src/components/ui/link/link';
import {
  REGEXP_EMAIL,
  REGEXP_LOGIN,
  REGEXP_NAME,
  REGEXP_PASSWORD,
  REGEXP_PHONE,
} from 'src/constants';
import router from 'src/router';
import { EventsType } from 'src/types';
import { Endpoints } from 'src/types';
import Block from 'src/utils/Block';

interface ISignupForm {
  events?: EventsType;
}

class SignupForm extends Block {
  constructor(props: ISignupForm) {
    super(props);
  }

  protected initChildren(): void {
    this.childrens.emailField = new FormField({
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

    this.childrens.firstNameField = new FormField({
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

    this.childrens.secondNameField = new FormField({
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

    this.childrens.phoneField = new FormField({
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

    this.childrens.passwordCheckField = new FormField({
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

    this.childrens.signupButton = new Button({
      type: 'submit',
      name: 'Зарегистрироваться',
      text: 'Зарегистрироваться',
    });

    this.childrens.signinLink = new Link({
      url: '/signin',
      text: 'Войти',
      events: {
        click: (event) => this.clickHandler(event),
      },
    });
  }

  clickHandler(event: Event) {
    event.preventDefault();
    router.go(Endpoints.SIGNIN);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

export default SignupForm;
