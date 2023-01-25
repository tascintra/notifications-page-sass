const allNotifications = document.querySelectorAll('.notification__container');

allNotifications.forEach((item, index) => {
  if (index < 3) {
    item.classList.add('unread');
    item.children[1].classList.add('unread');
  }
});

export const unreadNotifications = document.querySelectorAll(
  '.notification__container .unread'
);
