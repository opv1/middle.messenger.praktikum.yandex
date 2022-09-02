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
    try {
      if (data.password !== data.passwordCheck) {
        throw new Error('Проверьте пароли!');
      }

      await this.api.signUp(data);
      await this.getUser();

      router.go(Endpoints.CHAT);
    } catch (error: any) {
      console.error(error);
    }
  }

  async signIn(data: ISigninData) {
    try {
      await this.api.signIn(data);
      await this.getUser();

      router.go(Endpoints.CHAT);
    } catch (error: any) {
      console.error(error);
    }
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
      console.error(error);

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
    try {
      await this.api.logout();

      router.go(Endpoints.INDEX);
    } catch (error: any) {
      console.error(error);
    }
  }
}

export default new AuthController();
