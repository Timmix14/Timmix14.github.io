function addItem(type) {
  const input = document.getElementById(`${type}-input`);
  const datetimeInput = document.getElementById(`${type}-datetime`);
  const value = input.value.trim();
  const reminder = datetimeInput.value; // ISO Format

  if (value === "") return;

  const item = {
    text: value,
    completed: false,
    reminder: reminder || null
  };

  const list = getList(type);
  list.push(item);
  saveList(type, list);
  renderList(type, list);

  input.value = "";
  datetimeInput.value = "";
}

// Erinnerungen prüfen
setInterval(() => {
  const now = new Date();
  ['todo', 'shopping'].forEach(type => {
    const list = getList(type);
    list.forEach(item => {
      if(item.reminder && !item.notified){
        const remindTime = new Date(item.reminder);
        if(now >= remindTime){
          alert(`Erinnerung: ${item.text}`);
          item.notified = true;
          saveList(type, list);
        }
      }
    });
  });
}, 60000); // alle 60 Sekunden prüfen
