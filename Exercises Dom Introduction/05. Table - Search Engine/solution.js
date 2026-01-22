function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let elements = document.querySelectorAll('tbody tr');
      let word = document.getElementById('searchField').value;

for(let e of elements) {
   e.className = '';
}


      for(let element of elements) {
         if(element.textContent.includes(word)) {
            element.className='select';
         }
      }
   }
}