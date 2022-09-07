import template from './error-server.tpl.pug';

import Block from 'src/utils/Block';

class ErrorServerPage extends Block {
  render() {
    return this.compile(template, {});
  }
}

export default ErrorServerPage;
