function notify(message) {
  let notiDiv = document.getElementById('notification');
  notiDiv.textContent = message;
  notiDiv.style.display = 'block';

  notiDiv.addEventListener('click', () => {
    notiDiv.style.display = 'none';
  });
}