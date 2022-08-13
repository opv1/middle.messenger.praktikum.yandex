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
  type: Message;
  value: string;
  date?: string;
  sended?: boolean;
}

export interface IProfileItem {
  name: string;
  value: string;
}
