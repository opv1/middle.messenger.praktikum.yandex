import { MessageType } from '@/types';

export const regexpName = '^(?=.*[A-ZА-ЯЁ])([A-Za-zА-Яа-яЁё\\-]+)';

export const regexpLogin = '(?=.*[A-Za-z])[A-Za-z0-9\\-_]+';

export const regexpEmail =
  '^([\\w-]+(?:\\.[\\w-]+)*)@((?:[\\w-]+\\.)*\\w[\\w-]{0,66})\\.([a-z]{2,6}(?:\\.[a-z]{2})?)$';

export const regexpPassword = '(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,40}';

export const regexpPhone =
  '([\\+]*[7-8]{1}\\s?[\\(]*9[0-9]{2}[\\)]*\\s?\\d{3}[-]*\\d{2}[-]*\\d{2})';

export const regexpMessage = '.+';

export const data = [
  {
    title: 'Андрей',
    preview: 'Изображение',
    date: '10:49',
    count: '2',
  },
  {
    title: 'Киноклуб',
    preview: 'Вы: стикер',
    date: '12:00',
    count: '',
  },
  {
    title: 'Илья',
    preview: 'Друзья, у меня для вас особенный выпуск новостей!...',
    date: '15:12',
    count: '4',
  },
  {
    title: 'Вадим',
    preview: 'Вы: Круто!',
    date: 'Пт',
    count: '',
  },
  {
    title: 'Андрей',
    preview: 'Изображение',
    date: '10:49',
    count: '2',
  },
  {
    title: 'Киноклуб',
    preview: 'Вы: стикер',
    date: '12:00',
    count: '',
  },
  {
    title: 'Илья',
    preview: 'Друзья, у меня для вас особенный выпуск новостей!...',
    date: '15:12',
    count: '4',
  },
  {
    title: 'Вадим',
    preview: 'Вы: Круто!',
    date: 'Пт',
    count: '',
  },
];

export const profileInfo = [
  {
    name: 'Почта',
    value: 'pochta@yandex.ru',
  },
  {
    name: 'Логин',
    value: 'ivanivanov',
  },
  {
    name: 'Имя',
    value: 'Иван',
  },
  {
    name: 'Фамилия',
    value: 'Иванов',
  },
  {
    name: 'Имя в чате',
    value: 'Иван',
  },
  {
    name: 'Телефон',
    value: '+7 (909) 967 30 30',
  },
];

export const messages = [
  {
    type: MessageType.DATE,
    value: '19 июня',
  },
  {
    type: MessageType.INBOX,
    value:
      'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой. Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
    date: '11:56',
  },
  {
    type: MessageType.OUTBOX,
    value: 'Круто!',
    date: '12:00',
    sended: true,
  },
  {
    type: MessageType.DATE,
    value: '21 июня',
  },
  {
    type: MessageType.INBOX,
    value:
      'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой. Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
    date: '11:56',
  },
  {
    type: MessageType.OUTBOX,
    value: 'Круто!',
    date: '12:00',
    sended: true,
  },
];
