self.addEventListener('push', function(event) {
  var options = {
    body: event.data.text(),
    icon: 'https://example.com/icon.png', // Optional, füge ein Symbol hinzu
    badge: 'https://example.com/badge.png', // Optional, Badge für die Benachrichtigung
  };

  event.waitUntil(
    self.registration.showNotification('Neue Benachrichtigung', options)
  );
});
