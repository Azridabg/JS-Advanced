function create(words) {

   words.forEach(e => {
      let pElement = document.createElement('p');
      pElement.textContent = e;
      pElement.style.display = 'none';

      let divElement = document.createElement('div');
      divElement.appendChild(pElement);

      divElement.addEventListener('click', function (e) {
         if (pElement.style.display == 'none') {
            pElement.style.display = 'block'
         }
         else {
            pElement.style.display = 'none';
         }
      });

      let contentElement = document.getElementById('content');
      contentElement.appendChild(divElement);
   });
}