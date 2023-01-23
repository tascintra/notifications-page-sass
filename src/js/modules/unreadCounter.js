export const unreadCounter = document.querySelector('.notifications__counter');

const unreadNotifications = document.querySelectorAll(
  '.notification__container .unread'
);

unreadCounter.children[0].innerHTML = unreadNotifications.length;