const markAllRead = document.querySelector('.notifications__mark__all');

const unreadNotifications = document.querySelectorAll(
  '.notification__container .unread'
);

const notificationContentUnread = document.querySelectorAll(
  '.notification__content.unread'
);

notificationContentUnread.forEach((item) => {
  item
    .appendChild(document.createElement('button'))
    .classList.add('notification__mark__read');
});

const markRead = document.querySelectorAll('.notification__mark__read');

function handleMarkUnread(event) {
  event.target.parentElement.classList.remove('unread');
  event.target.parentElement.parentElement.classList.remove('unread');
}

markRead.forEach((button) =>
  button.addEventListener('click', handleMarkUnread)
);
