import UserAPI from 'src/api/UserAPI';
import router from 'src/router';
import store from 'src/store';
import { Endpoints, IPasswordFormData, IUser, IUserSearchRequest } from 'src/types';

class UserController {
  private api: UserAPI;

  constructor() {
    this.api = new UserAPI();
  }

  async updateProfile(data: IUser) {
    try {
      const newUser = await this.api.updateProfile(data);

      store.set('currentUser', newUser);
      router.go(Endpoints.PROFILE);
    } catch (error: any) {
      console.error(error);
    }
  }

  async updatePassword(data: IPasswordFormData) {
    try {
      if (data.newPassword !== data.passwordCheck) {
        throw new Error('Проверьте пароли!');
      }

      await this.api.updatePassword(data);

      router.go(Endpoints.PROFILE);
    } catch (error: any) {
      console.error(error);
    }
  }

  async updateAvatar(data: FormData) {
    try {
      const response = (await this.api.updateAvatar(data)) as unknown as IUser;

      store.set('currentUser.avatar', response.avatar);
    } catch (error: any) {
      console.error(error);
    }
  }

  async searchUser(data: IUserSearchRequest) {
    try {
      return await this.api.search(data);
    } catch (error: any) {
      console.error(error);
    }
  }
}

export default new UserController();
