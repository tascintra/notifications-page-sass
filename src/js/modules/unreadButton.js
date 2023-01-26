export default function handleUnreadButton() {
  const unreadNotificationContent = document.querySelectorAll(
    '.notification__content.unread'
  );

  const mediaQuery = window.matchMedia('(max-width: 700px)');

  unreadNotificationContent.forEach((item) => {
    item
      .appendChild(document.createElement('button'))
      .classList.add('notification__mark__read');

    item.parentElement
      .appendChild(document.createElement('button'))
      .classList.add('notification__mark__read');

    function handleScreenResize(event) {
      !event.matches
        ? ((item.parentElement.lastChild.style.display = 'none'),
          (item.lastChild.style.display = 'block'))
        : ((item.parentElement.lastChild.style.display = 'block'),
          (item.lastChild.style.display = 'none'));
    }

    mediaQuery.addListener(handleScreenResize);
    handleScreenResize(mediaQuery);
  });
}
