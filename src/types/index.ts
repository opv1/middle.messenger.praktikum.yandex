import Block from 'src/utils/Block';

export enum Method {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export enum Message {
  DATE = 'date',
  INBOX = 'inbox',
  OUTBOX = 'outbox',
}

export enum Endpoints {
  INDEX = '/',
  SIGNIN = '/signin',
  SIGNUP = '/signup',
  CHAT = '/chat',
  PROFILE = '/profile',
  PROFILE_INFO = '/info',
  PROFILE_PASSWORD = '/password',
  ERROR_CLIENT = '/404',
  ERROR_SERVER = '/500',
}

export type OptionsType = {
  method: Method;
  data?: any;
};

export type OptionsWithoutMethod = Omit<OptionsType, 'method'>;

export type EventsType = Record<string, (e: Event) => void>;

export interface IChatItem {
  title: string;
  preview: string;
  date: string;
  count: string;
}

export interface IMessageItem {
  id: number;
  user_id: number;
  chat_id: number;
  type: 'message';
  time: string;
  content: string;
  is_read: boolean;
  file: null;
}

export interface IProfileItem {
  name: string;
  value?: string;
}

export interface ISigninData {
  login: string;
  password: string;
}

export interface ISignupData {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}

export interface ISignUpFormData extends ISignupData {
  passwordCheck: string;
}

export interface IUser {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  phone: string;
  id?: number;
  avatar?: string;
  display_name?: string;
}

export interface IUserSearchRequest {
  login: string;
}

export type Indexed<T = unknown> = {
  [key in string]: T;
};

export interface IPage {
  path: Endpoints;
  block: typeof Block;
  props?: Record<string, unknown>;
}

export interface IChatItem {
  id: number;
  title: string;
  avatar: string;
  unread_count: number;
  last_message?: ILastMessage;
}

export interface IChatCreate {
  title: string;
}

export interface IChatUsersRequest {
  users: number[];
  chatId: number;
}

export interface ILastMessage {
  user: IUser;
  time: string;
  content: string;
}

export interface IPasswordData {
  oldPassword: string;
  newPassword: string;
}

export interface IPasswordFormData extends IPasswordData {
  passwordCheck: string;
}
