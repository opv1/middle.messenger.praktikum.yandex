import template from './profile-change-password.tpl.pug';

import FormField from '@components/auth/auth-field/auth-field';
import Button from '@components/ui/button/button';
import { REGEXP_PASSWORD } from '@constants';
import { withUser } from '@hoc/withUser';
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
      classes: 'profile__field',
      inputProps: {
        type: 'password',
        name: 'oldPassword',
        placeholder: '•••••••••',
        required: true,
        minlength: 8,
        maxlength: 40,
        pattern: REGEXP_PASSWORD,
      },
      validate: true,
    });

    this.childrens.newPasswordField = new FormField({
      classes: 'profile__field',
      inputProps: {
        type: 'password',
        name: 'newPassword',
        placeholder: '•••••••••••',
        required: true,
        minlength: 8,
        maxlength: 40,
        pattern: REGEXP_PASSWORD,
      },
      validate: true,
    });

    this.childrens.repeatPasswordField = new FormField({
      classes: 'profile__field',
      inputProps: {
        type: 'password',
        name: 'passwordCheck',
        placeholder: '•••••••••••',
        required: true,
        minlength: 8,
        maxlength: 40,
        pattern: REGEXP_PASSWORD,
      },
      validate: true,
    });

    this.childrens.saveButton = new Button({
      classes: 'profile__button',
      type: 'submit',
      name: 'Сохранить',
      text: 'Сохранить',
    });
  }

  render() {
    return this.compile(template, {
      ...this.props,
    });
  }
}

export default withUser(ProfileChangePassword);
