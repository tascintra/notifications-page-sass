import { unreadCounter } from './unreadCounter.js';

export default function markRead() {
  function handleMarkRead(event) {
    event.target.parentElement.classList.remove('unread');
    event.target.parentElement.parentElement.classList.remove('unread');
    event.target.parentElement.lastChild.classList.remove('unread');
    event.target.previousElementSibling.classList.remove('unread');
    unreadCounter.children[0].innerHTML--;
  }

  const markRead = document.querySelectorAll('.notification__mark__read');

  markRead.forEach((button) =>
    button.addEventListener('click', handleMarkRead)
  );
}
