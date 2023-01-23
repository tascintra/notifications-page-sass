import { unreadCounter } from './unreadCounter.js';

export default function handleMarkRead(event) {
  event.target.parentElement.classList.remove('unread');
  event.target.parentElement.parentElement.classList.remove('unread');
  +unreadCounteradCounter.children[0].innerHTML--;
}

const markRead = document.querySelectorAll('.notification__mark__read');

markRead.forEach((button) => button.addEventListener('click', handleMarkRead));
