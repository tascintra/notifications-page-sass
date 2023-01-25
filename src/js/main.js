import markRead from './modules/markRead.js';
import handleUnreadButton from './modules/unreadButton.js';
import { unreadCounter } from './modules/unreadCounter.js';

const allNotifications = document.querySelectorAll('.notification__container');

allNotifications.forEach((item, index) => {
  if (index < 3) {
    item.classList.add('unread');
    item.children[1].classList.add('unread');
  }
});

const markAllRead = document.querySelector('.notifications__mark__all');

const unreadNotifications = document.querySelectorAll(
  '.notification__container .unread'
);

unreadCounter.children[0].innerHTML = unreadNotifications.length;

handleUnreadButton();
markRead();
