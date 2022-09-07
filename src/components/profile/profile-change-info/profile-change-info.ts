import template from './profile-change-info.tpl.pug';

import FormField from 'src/components/auth/auth-field/auth-field';
import Button from 'src/components/ui/button/button';
import Input from 'src/components/ui/input/input';
import { REGEXP_EMAIL, REGEXP_LOGIN, REGEXP_NAME, REGEXP_PHONE } from 'src/constants';
import UserController from 'src/controllers/UserController';
import { withUser } from 'src/hoc/withUser';
import { EventsType } from 'src/types';
import Block from 'src/utils/Block';

interface IProfileChangeInfo {
  events?: EventsType;
}

class ProfileChangeInfo extends Block {
  constructor(props: IProfileChangeInfo) {
    super(props);
  }

  protected initChildren() {
    this.childrens.emailField = new FormField({
      classes: 'profile__field',
      inputProps: {
        type: 'email',
        name: 'email',
        placeholder: 'pochtasrc/yandex.ru',
        required: true,
        pattern: REGEXP_EMAIL,
      },
      validate: true,
    });

    this.childrens.loginField = new FormField({
      classes: 'profile__field',
      inputProps: {
        type: 'text',
        name: 'login',
        placeholder: 'ivanivanov',
        required: true,
        minlength: 3,
        maxlength: 20,
        pattern: REGEXP_LOGIN,
      },
      validate: true,
    });

    this.childrens.firstNameField = new FormField({
      classes: 'profile__field',
      inputProps: {
        type: 'text',
        name: 'first_name',
        placeholder: 'Иван',
        required: true,
        pattern: REGEXP_NAME,
      },
      validate: true,
    });

    this.childrens.secondNameField = new FormField({
      classes: 'profile__field',
      inputProps: {
        type: 'text',
        name: 'second_name',
        placeholder: 'Иванов',
        required: true,
        pattern: REGEXP_NAME,
      },
      validate: true,
    });

    this.childrens.displayNameField = new FormField({
      classes: 'profile__field',
      inputProps: {
        type: 'text',
        name: 'display_name',
        placeholder: 'Иван',
        required: true,
        pattern: REGEXP_NAME,
      },
      validate: true,
    });

    this.childrens.phoneField = new FormField({
      classes: 'profile__field',
      inputProps: {
        type: 'tel',
        name: 'phone',
        placeholder: '+7 (909) 967 30 30',
        required: true,
        pattern: REGEXP_PHONE,
      },
      validate: true,
    });

    this.childrens.avatarInput = new Input({
      type: 'file',
      name: 'avatar',
      accept: 'image/*',
      events: {
        change: (event) => this.changeHandler(event),
      },
    });

    this.childrens.saveButton = new Button({
      classes: 'profile__button',
      type: 'submit',
      name: 'Сохранить',
      text: 'Сохранить',
    });
  }

  async changeHandler(event: Event) {
    try {
      event.preventDefault();

      const input = event.target as HTMLInputElement;
      const formData = new FormData();
      formData.append('avatar', input.files![0]);

      await UserController.updateAvatar(formData);
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return this.compile(template, {
      ...this.props,
    });
  }
}

export default withUser(ProfileChangeInfo);
