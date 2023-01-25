import markRead from './modules/markRead.js';
import handleUnreadButton from './modules/unreadButton.js';
import { unreadCounter } from './modules/unreadCounter.js';
import { unreadNotifications } from './modules/unreadNotifications.js';
import handleMarkAllRead from './modules/markAllRead.js';

unreadCounter.children[0].innerHTML = unreadNotifications.length;

handleUnreadButton();
markRead();
handleMarkAllRead();
