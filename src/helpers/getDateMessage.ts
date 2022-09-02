import { setFormat } from './setFormatDate';

import { IMessageItem } from '@types';

export const getDateMessage = (msg: IMessageItem[] | IMessageItem) => {
  if (!Array.isArray(msg)) {
    const day = new Date(msg.time);
    msg.time = setFormat(day);
  } else {
    msg.map((item) => {
      const day = new Date(item.time);
      item.time = setFormat(day);
    });
  }
};
