const app = (() => {
    'use strict';
  
    let swRegistration = null;
  
    const PaymentButton = document.querySelector('.js-notify-btn');
  
    function displayNotification() {
  
      // TODO 2.3 - display a Notification
      if (Notification.permission == 'granted') {
        navigator.serviceWorker.getRegistration().then(reg => {
      
          // TODO 2.4 - Add 'options' object to configure the notification
           const options = {
            body: 'Successful Payment: Your Object is on Shipping',
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
    PaymentButton.addEventListener('click', () => {
      displayNotification();
    });
  
  })();