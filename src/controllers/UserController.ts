import UserAPI from '@api/UserAPI';
import router from '@router';
import store from '@store';
import { Endpoints, IPasswordFormData, IUser, IUserSearchRequest } from '@types';

class UserController {
  private api: UserAPI;

  constructor() {
    this.api = new UserAPI();
  }

  async updateProfile(data: IUser) {
    const newUser = await this.api.updateProfile(data);

    store.set('currentUser', newUser);

    router.go(Endpoints.PROFILE);
  }

  async updatePassword(data: IPasswordFormData) {
    if (data.newPassword !== data.passwordCheck) {
      throw new Error('Проверьте пароли!');
    }

    await this.api.updatePassword(data);

    router.go(Endpoints.PROFILE);
  }

  async updateAvatar(data: FormData) {
    const response = (await this.api.updateAvatar(data)) as unknown as IUser;

    store.set('currentUser.avatar', response.avatar);
  }

  async searchUser(data: IUserSearchRequest) {
    return await this.api.search(data);
  }
}

export default new UserController();
