import ChatPage from 'src/pages/chat/chat';
import ErrorClientPage from 'src/pages/error-client/error-client';
import ErrorServerPage from 'src/pages/error-server/error-server';
import ProfilePage from 'src/pages/profile/profile';
import ProfileInfoPage from 'src/pages/profile-info/profile-info';
import ProfilePasswordPage from 'src/pages/profile-password/profile-password';
import SigninPage from 'src/pages/signin/signin';
import SignupPage from 'src/pages/signup/signup';
import { Endpoints, IPage } from 'src/types';

export const REGEXP_NAME = '^(?=.*[A-ZА-ЯЁ])([A-Za-zА-Яа-яЁё\\-]+)';

export const REGEXP_LOGIN = '(?=.*[A-Za-z])[A-Za-z0-9\\-_]+';

export const REGEXP_EMAIL =
  '^([\\w-]+(?:\\.[\\w-]+)*)@((?:[\\w-]+\\.)*\\w[\\w-]{0,66})\\.([a-z]{2,6}(?:\\.[a-z]{2})?)$';

export const REGEXP_PASSWORD = '(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,40}';

export const REGEXP_PHONE =
  '([\\+]*[7-8]{1}\\s?[\\(]*9[0-9]{2}[\\)]*\\s?\\d{3}[-]*\\d{2}[-]*\\d{2})';

export const REGEXP_MESSAGE = '.+';

export const APP_SELECTOR = '#app';

export const BASE_URL = 'https://ya-praktikum.tech/api/v2';

export const BASE_URL_SOCKET = 'wss://ya-praktikum.tech/ws/chats/';

export const PAGES: IPage[] = [
  {
    path: Endpoints.INDEX,
    block: SigninPage,
  },
  {
    path: Endpoints.SIGNIN,
    block: SigninPage,
  },
  {
    path: Endpoints.SIGNUP,
    block: SignupPage,
  },
  {
    path: Endpoints.CHAT,
    block: ChatPage,
  },
  {
    path: Endpoints.PROFILE,
    block: ProfilePage,
  },
  {
    path: Endpoints.PROFILE_INFO,
    block: ProfileInfoPage,
  },
  {
    path: Endpoints.PROFILE_PASSWORD,
    block: ProfilePasswordPage,
  },
  {
    path: Endpoints.ERROR_CLIENT,
    block: ErrorClientPage,
  },
  {
    path: Endpoints.ERROR_SERVER,
    block: ErrorServerPage,
  },
];
