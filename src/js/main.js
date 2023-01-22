const markAllRead = document.querySelector('.notifications__mark__all');

const unreadNotifications = document.querySelectorAll(
  '.notification__container .unread'
);

const notificationContentUnread = document.querySelectorAll(
  '.notification__content.unread'
);

console.log(notificationContentUnread);

notificationContentUnread[0].appendChild(document.createElement('button')).classList.add('notification__mark__read');
