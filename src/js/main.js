const allNotifications = document.querySelectorAll('.notification__container');

allNotifications.forEach((item, index) => {
  if (index < 3) {
    item.classList.add('unread');
    item.children[1].classList.add('unread');
  }
});

const unreadNotificationContent = document.querySelectorAll(
  '.notification__content.unread'
);

unreadNotificationContent.forEach((item) => {
  item
    .appendChild(document.createElement('button'))
    .classList.add('notification__mark__read');
});

const markAllRead = document.querySelector('.notifications__mark__all');

const unreadNotifications = document.querySelectorAll(
  '.notification__container .unread'
);

const unreadCounter = document.querySelector('.notifications__counter');

unreadCounter.children[0].innerHTML = unreadNotifications.length;

function handleMarkRead(event) {
  event.target.parentElement.classList.remove('unread');
  event.target.parentElement.parentElement.classList.remove('unread');
  +unreadCounter.children[0].innerHTML--;
}

const markRead = document.querySelectorAll('.notification__mark__read');

markRead.forEach((button) => button.addEventListener('click', handleMarkRead));
