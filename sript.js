function setReminder(reminderTime, taskText) {
  const reminderDate = new Date(reminderTime);
  const currentTime = new Date();

  const timeDifference = reminderDate.getTime() - currentTime.getTime();

  // Überprüfen, ob Benachrichtigungen erlaubt sind
  if (Notification.permission !== "granted") {
    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        console.log("Benachrichtigungen erlaubt.");
      } else {
        console.log("Benachrichtigungen abgelehnt.");
      }
    });
  }

  if (timeDifference > 0) {
    setTimeout(() => {
      // Wenn Benachrichtigungen erlaubt sind, wird eine Benachrichtigung angezeigt
      if (Notification.permission === "granted") {
        new Notification("Erinnerung", {
          body: `Erinnerung: ${taskText}`,
          icon: "https://example.com/icon.png", // Füge hier ein Symbol hinzu, wenn du möchtest
        });
      }
    }, timeDifference);
  } else {
    alert("Das Erinnerungsdatum ist bereits vergangen!");
  }
}
