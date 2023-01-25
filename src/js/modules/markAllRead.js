import { unreadNotifications } from './unreadNotifications.js';
import { unreadCounter } from './unreadCounter.js';

export default function handleMarkAllRead() {
  function markAllNotificationsAsRead() {
    unreadNotifications.forEach((notification) => {
      notification.classList.remove('unread');
      notification.parentElement.classList.remove('unread');
    });
    unreadCounter.children[0].innerHTML = 0;
  }

  const markAllRead = document.querySelector('.notifications__mark__all');
  markAllRead.addEventListener('click', markAllNotificationsAsRead);
}
