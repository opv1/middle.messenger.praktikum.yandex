import template from './profile-change-info.tpl.pug';

import FormField from '@components/auth/auth-field/auth-field';
import Button from '@components/ui/button/button';
import { REGEXP_EMAIL, REGEXP_LOGIN, REGEXP_NAME, REGEXP_PHONE } from '@constants';
import { EventsType } from '@types';
import Block from '@utils/Block';

interface IProfileChangeInfo {
  events?: EventsType;
}

class ProfileChangeInfo extends Block {
  constructor(props: IProfileChangeInfo) {
    super(props);
  }

  protected initChildren() {
    this.childrens.emailField = new FormField({
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

    this.childrens.loginField = new FormField({
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

    this.childrens.firstNameField = new FormField({
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

    this.childrens.secondNameField = new FormField({
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

    this.childrens.displayNameField = new FormField({
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

    this.childrens.phoneField = new FormField({
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
