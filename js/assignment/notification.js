const app = (() => {
  'use strict';

  const notifyButton = document.querySelector('.js-notify-btn');

  // TODO 2.1 - check for notification support
  if (!('Notification' in window)) {
    console.log('This browser does not support notifications!');
    return;
  }

  // TODO 2.2 - request permission to show notifications
  Notification.requestPermission(status => {
    console.log('Notification permission status:', status);
  });

  function displayNotification() {

    // TODO 2.3 - display a Notification
    if (Notification.permission == 'granted') {
      navigator.serviceWorker.getRegistration().then(reg => {

        // TODO 2.4 - Add 'options' object to configure the notification
        const options = {
          body: 'Notification Allowed',
          icon: 'img/Robski.png',
          vibrate: [100, 50, 100],
          data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
          }
        };

        reg.showNotification('Robski', options);
      });
    }

  }
  notifyButton.addEventListener('click', () => {
    displayNotification();
  });

})();
