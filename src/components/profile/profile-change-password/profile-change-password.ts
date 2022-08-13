import template from './profile-change-password.tpl.pug';

import FormField from '@components/auth/auth-field/auth-field';
import Button from '@components/ui/button/button';
import { REGEXP_PASSWORD } from '@constants';
import { EventsType } from '@types';
import Block from '@utils/Block';

interface IProfileChangePassword {
  events?: EventsType;
}

class ProfileChangePassword extends Block {
  constructor(props: IProfileChangePassword) {
    super(props);
  }

  protected initChildren() {
    this.childrens.oldPasswordField = new FormField({
      inputProps: {
        type: 'password',
        name: 'password',
        placeholder: '•••••••••',
        required: true,
        minlength: 8,
        maxlength: 40,
        pattern: REGEXP_PASSWORD,
      },
      classes: 'profile__field',
      validate: true,
    });

    this.childrens.newPasswordField = new FormField({
      inputProps: {
        type: 'password',
        name: 'newPassword',
        placeholder: '•••••••••••',
        required: true,
        minlength: 8,
        maxlength: 40,
        pattern: REGEXP_PASSWORD,
      },
      classes: 'profile__field',
      validate: true,
    });

    this.childrens.repeatPasswordField = new FormField({
      inputProps: {
        type: 'password',
        name: 'newPassword',
        placeholder: '•••••••••••',
        required: true,
        minlength: 8,
        maxlength: 40,
        pattern: REGEXP_PASSWORD,
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
