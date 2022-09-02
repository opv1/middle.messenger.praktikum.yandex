import { expect } from 'chai';
import jsdom from 'mocha-jsdom';

describe('Router', () => {
  jsdom({ url: 'http://localhost' });

  it('Переход на новую страницу должен менять состояние сущности history', () => {
    window.history.pushState({ page: 'login' }, 'Login', '/login');
    window.history.pushState({ page: 'register' }, 'Register', '/register');
    expect(window.history.length).to.eq(3);
  });
});
