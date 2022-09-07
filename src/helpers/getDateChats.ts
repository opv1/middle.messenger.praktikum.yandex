import { setFormat } from './setFormatDate';

import { IChatItem } from 'src/types';

export const getDateChats = (chats: IChatItem[]) => {
  chats.map((chat) => {
    if (chat.last_message) {
      const day = new Date(chat.last_message.time);
      chat.last_message.time = setFormat(day);
    }
  });
};
