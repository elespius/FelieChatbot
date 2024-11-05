/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals, no-console */
/* globals clients */
self.addEventListener('push', event => {
  let notification = event.data && event.data.json();

  event.waitUntil(
    self.registration.showNotification(notification.title, {
      tag: notification.tag,
      data: {
        url: notification.url,
      },
    })
  );
});

self.addEventListener('notificationclick', event => {
  if (event.action === 'answer') {
    console.log('Trả lời cuộc gọi');
    StringeeSoftPhone.answerCall();
  } else if (event.action === 'decline') {
    console.log('Từ chối cuộc gọi');
    StringeeSoftPhone.hangupCall();
  } else {
    let notification = event.notification;
    event.waitUntil(
      clients.matchAll({ type: 'window' }).then(windowClients => {
        let matchingWindowClients = windowClients.filter(
          client => client.url === notification.data.url
        );

        if (matchingWindowClients.length) {
          let firstWindow = matchingWindowClients[0];
          if (firstWindow && 'focus' in firstWindow) {
            firstWindow.focus();
            return;
          }
        }
        if (clients.openWindow) {
          clients.openWindow(notification.data.url);
        }
      })
    );
  }
});
