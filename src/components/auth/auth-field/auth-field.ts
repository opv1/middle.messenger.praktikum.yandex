import template from './auth-field.tpl.pug';

import Input, { IInput } from 'src/components/ui/input/input';
import {
  addClass,
  getValidationMessage,
  inputHasValue,
  isValid,
  removeClass,
  setMessage,
} from 'src/helpers';
import { EventsType } from 'src/types';
import Block from 'src/utils/Block';

interface IFormField {
  classes?: string;
  inputProps: IInput;
  name?: string;
  label?: string;
  validate?: boolean;
  events?: EventsType;
}

class FormField extends Block {
  constructor(props: IFormField) {
    super(props);

    this.setListeners();
  }

  classes = {
    isValue: 'isValue',
    hasError: 'isError',
  };

  input = this.element?.querySelector('input');
  message = this.element?.querySelector('span');

  setListeners() {
    this.input?.addEventListener('focus', this.onFocus.bind(this));
    this.input?.addEventListener('blur', this.onBlur.bind(this));
  }

  onFocus(): void {
    addClass(this.classes.isValue, this.element);
    this.validate(this.input);
  }

  onBlur(): void {
    if (!inputHasValue(this.input)) {
      removeClass(this.classes.isValue, this.element);
    }

    this.validate(this.input);
  }

  validate(input?: HTMLInputElement | null): void {
    if (input && this.props.validate) {
      if (!isValid(input)) {
        addClass(this.classes.hasError, this.element);
        setMessage(getValidationMessage(input), this.message);
      } else {
        removeClass(this.classes.hasError, this.element);
        setMessage('', this.message);
      }
    }
  }

  protected initChildren(): void {
    this.childrens.input = new Input({ ...this.props.inputProps });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

export default FormField;
