export enum Method {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export type Options = {
  method: Method;
  data?: any;
};

export type OptionsWithoutMethod = Omit<Options, 'method'>;

export type TEvents = Record<string, (e: Event) => void>;

export interface IChatItem {
  title: string;
  preview: string;
  date: string;
  count: string;
}

export enum MessageType {
  DATE = 'date',
  INBOX = 'inbox',
  OUTBOX = 'outbox',
}

export interface IMessageItem {
  type: MessageType;
  value: string;
  date?: string;
  sended?: boolean;
}

export interface IProfileItem {
  name: string;
  value: string;
}
