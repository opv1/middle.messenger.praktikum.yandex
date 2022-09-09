import BaseAPI from './BaseAPI';

import { ISigninData, ISignupData } from 'src/types';

export default class AuthAPI extends BaseAPI {
  constructor() {
    super('/auth');
  }

  user(): Promise<XMLHttpRequestResponseType> {
    return this.http.get('/user');
  }

  signUp(data: ISignupData): Promise<XMLHttpRequestResponseType> {
    return this.http.post('/signup', { data });
  }

  signIn(data: ISigninData): Promise<XMLHttpRequestResponseType> {
    return this.http.post('/signin', { data });
  }

  logout(): Promise<XMLHttpRequestResponseType> {
    return this.http.post('/logout');
  }
}
