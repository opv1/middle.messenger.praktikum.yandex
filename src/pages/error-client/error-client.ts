import template from './error-client.tpl.pug';

import Block from 'src/utils/Block';

class ErrorClientPage extends Block {
  render() {
    return this.compile(template, {});
  }
}

export default ErrorClientPage;
