import BaseAPI from './BaseAPI';

import { IPasswordData, IUser, IUserSearchRequest } from 'src/types';

export default class UserAPI extends BaseAPI {
  constructor() {
    super('/user');
  }

  get(id: string): Promise<XMLHttpRequestResponseType> {
    return this.http.get(`/${id}`);
  }

  updateProfile(data: IUser): Promise<XMLHttpRequestResponseType> {
    return this.http.put('/profile', { data });
  }

  updateAvatar(data: FormData): Promise<XMLHttpRequestResponseType> {
    return this.http.put('/profile/avatar', { data });
  }

  updatePassword(data: IPasswordData): Promise<XMLHttpRequestResponseType> {
    return this.http.put('/password', { data });
  }

  search(data: IUserSearchRequest): Promise<XMLHttpRequestResponseType> {
    return this.http.post('/search', { data });
  }
}
