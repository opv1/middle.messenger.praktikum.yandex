import { TEvents } from '@types';

import Block from '@utils/Block';

import Button from '@ui/button/button';

import template from './profile-change-info.tpl.pug';

import FormField from '@components/auth/auth-field/auth-field';
import { REGEXP_EMAIL, REGEXP_LOGIN, REGEXP_NAME, REGEXP_PHONE } from '@constants';

interface IProfileChangeInfo {
  events?: TEvents;
}

class ProfileChangeInfo extends Block {
  constructor(props: IProfileChangeInfo) {
    super(props);
  }

  protected initChildren() {
    this.childrens.email = new FormField({
      inputProps: {
        type: 'email',
        name: 'email',
        placeholder: 'pochta@yandex.ru',
        required: true,
        pattern: REGEXP_EMAIL,
      },
      classes: 'profile__field',
      validate: true,
    });

    this.childrens.login = new FormField({
      inputProps: {
        type: 'text',
        name: 'login',
        placeholder: 'ivanivanov',
        required: true,
        minlength: 3,
        maxlength: 20,
        pattern: REGEXP_LOGIN,
      },
      classes: 'profile__field',
      validate: true,
    });

    this.childrens.firstName = new FormField({
      inputProps: {
        type: 'text',
        name: 'first_name',
        placeholder: 'Иван',
        required: true,
        pattern: REGEXP_NAME,
      },
      classes: 'profile__field',
      validate: true,
    });

    this.childrens.secondName = new FormField({
      inputProps: {
        type: 'text',
        name: 'second_name',
        placeholder: 'Иванов',
        required: true,
        pattern: REGEXP_NAME,
      },
      classes: 'profile__field',
      validate: true,
    });

    this.childrens.displayName = new FormField({
      inputProps: {
        type: 'text',
        name: 'display_name',
        placeholder: 'Иван',
        required: true,
        pattern: REGEXP_NAME,
      },
      classes: 'profile__field',
      validate: true,
    });

    this.childrens.phone = new FormField({
      inputProps: {
        type: 'tel',
        name: 'phone',
        placeholder: '+7 (909) 967 30 30',
        required: true,
        pattern: REGEXP_PHONE,
      },
      classes: 'profile__field',
      validate: true,
    });

    this.childrens.saveButton = new Button({
      type: 'submit',
      name: 'Сохранить',
      text: 'Сохранить',
      classes: 'profile__button',
    });
  }

  render() {
    return this.compile(template, {});
  }
}

export default ProfileChangeInfo;
