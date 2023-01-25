export default function handleUnreadButton() {
  const unreadNotificationContent = document.querySelectorAll(
    '.notification__content.unread'
  );
  
  unreadNotificationContent.forEach((item) => {
    item
      .appendChild(document.createElement('button'))
      .classList.add('notification__mark__read');
  });
}
