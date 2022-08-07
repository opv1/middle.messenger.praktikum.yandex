import { TEvents } from '@/types';

import Block from '@/utils/Block';

import Button from '@/ui/button/button';

import template from './profile-change-password.tpl.pug';

import FormField from '@/components/auth/auth-field/auth-field';
import { regexpPassword } from '@/constants';

interface IProfileChangePassword {
  events?: TEvents;
}

class ProfileChangePassword extends Block {
  constructor(props: IProfileChangePassword) {
    super(props);
  }

  protected initChildren() {
    this.childrens.oldPassword = new FormField({
      inputProps: {
        type: 'password',
        name: 'password',
        placeholder: '•••••••••',
        required: true,
        minlength: 8,
        maxlength: 40,
        pattern: regexpPassword,
      },
      classes: 'profile__field',
      validate: true,
    });

    this.childrens.newPassword = new FormField({
      inputProps: {
        type: 'password',
        name: 'newPassword',
        placeholder: '•••••••••••',
        required: true,
        minlength: 8,
        maxlength: 40,
        pattern: regexpPassword,
      },
      classes: 'profile__field',
      validate: true,
    });

    this.childrens.newPasswordRepeat = new FormField({
      inputProps: {
        type: 'password',
        name: 'newPassword',
        placeholder: '•••••••••••',
        required: true,
        minlength: 8,
        maxlength: 40,
        pattern: regexpPassword,
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

export default ProfileChangePassword;
