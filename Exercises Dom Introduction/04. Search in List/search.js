function search() {
   let userWord = document.getElementById('searchText');
   let townsElement = Array.from(document.querySelectorAll('#towns li'));
   let count = 0;
   let match = document.getElementById('result');

   if (userWord.value != '') {


      for (let town of townsElement) {
         if (town.textContent.includes(userWord.value)) {
            town.style.textDecoration = 'underline';
            town.style.fontWeight = 'bold';
            count++
         }
         else {
            town.style.textDecoration = 'none';
            town.style.fontWeight = 'normal';
         }
      }


   }

   match.textContent = `${count} matches found`;
}
