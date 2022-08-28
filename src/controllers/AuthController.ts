import AuthAPI from '@api/AuthAPI';
import router from '@router';
import store from '@store';
import { Endpoints, ISigninData, ISignUpFormData } from '@types';

class AuthController {
  private api: AuthAPI;

  constructor() {
    this.api = new AuthAPI();
  }

  async signUp(data: ISignUpFormData) {
    if (data.password !== data.passwordCheck) {
      throw new Error('Проверьте пароли!');
    }

    await this.api.signUp(data);
    await this.getUser();

    router.go(Endpoints.CHAT);
  }

  async signIn(data: ISigninData) {
    await this.api.signIn(data);
    await this.getUser();

    router.go(Endpoints.CHAT);
  }

  async getUser() {
    const path = window.location.pathname;

    try {
      const user = await this.api.user();

      store.set('currentUser', user);

      switch (path) {
        case Endpoints.SIGNIN:
        case Endpoints.SIGNUP:
        case Endpoints.INDEX:
          router.go(Endpoints.PROFILE);
          break;
        default:
          break;
      }
    } catch (error) {
      switch (path) {
        case Endpoints.INDEX:
        case Endpoints.SIGNIN:
        case Endpoints.SIGNUP:
          break;
        default:
          router.go(Endpoints.SIGNIN);
          break;
      }
    }
  }

  async logout() {
    await this.api.logout();
    router.go(Endpoints.INDEX);
  }
}

export default new AuthController();
