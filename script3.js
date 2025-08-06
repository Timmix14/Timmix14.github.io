const webpush = require('web-push');
const pushSubscription = {};  // Die Push-Subscription des Benutzers, die du speichern musst

const vapidKeys = webpush.generateVAPIDKeys();
webpush.setVapidDetails(
  'mailto:example@yourdomain.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

const payload = JSON.stringify({ title: 'Neue Nachricht', message: 'Dies ist eine Benachrichtigung' });

webpush.sendNotification(pushSubscription, payload)
  .then(response => {
    console.log('Push-Nachricht gesendet:', response);
  })
  .catch(err => {
    console.error('Fehler beim Senden der Push-Nachricht:', err);
  });
