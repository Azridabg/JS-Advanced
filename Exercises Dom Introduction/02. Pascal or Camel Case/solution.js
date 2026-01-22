function solve() {
  let textElement = document.getElementById('text');
  let conventionName = document.getElementById('naming-convention');
  let resultElement = document.getElementById('result');



  if (conventionName.value == 'Camel Case') {
    let word = textElement.value.split(' ');
    word = word.map((x) => x.toLowerCase());
    let finalWord = [];

    for (let i = 0; i < word.length; i++) {
      if (i == 0) {
        finalWord.push(word[0])
      }
      else {
        let add = word[i].split('')[0].toUpperCase() + word[i].split('').slice(1, word[i].length).join('');
        finalWord.push(add);
      }
    }


    resultElement.textContent = finalWord.join('');
  }
  else if (conventionName.value == 'Pascal Case') {
    let word = textElement.value.split(' ');
    word = word.map((x) => x.toLowerCase());
    let finalWord = [];

    for (let i = 0; i < word.length; i++) {
      
      
        let add = word[i].split('')[0].toUpperCase() + word[i].split('').slice(1, word[i].length).join('');
        finalWord.push(add);
  
        
    }


    resultElement.textContent = finalWord.join('');
  }
  else {
    resultElement.textContent = 'Error!';
  }
}