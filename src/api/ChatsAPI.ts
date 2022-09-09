import BaseAPI from './BaseAPI';

import { queryString } from 'src/helpers/queryString';
import { IChatCreate, IChatUsersRequest, Indexed } from 'src/types';

export default class ChatsAPI extends BaseAPI {
  constructor() {
    super('/chats');
  }

  getToken(id: string): Promise<XMLHttpRequestResponseType> {
    return this.http.post(`/token/${id}`);
  }

  getChats(query: Indexed): Promise<XMLHttpRequestResponseType> {
    return this.http.get(queryString(query));
  }

  addChat(data: IChatCreate): Promise<XMLHttpRequestResponseType> {
    return this.http.post('', { data });
  }

  deleteChat(id: string): Promise<XMLHttpRequestResponseType> {
    return this.http.delete('', { data: { chatId: id } });
  }

  addUser(data: IChatUsersRequest): Promise<XMLHttpRequestResponseType> {
    return this.http.put('/users', { data });
  }

  deleteUser(data: IChatUsersRequest): Promise<XMLHttpRequestResponseType> {
    return this.http.delete('/users', { data });
  }
}
