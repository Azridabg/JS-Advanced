function solve() {
  let text = document.getElementById('input').value;
  let splittedText = text.split('.');
  let divElement = document.getElementById('output');
  let trash = splittedText.pop();
  let counter = 0;
  let checker = false;
  let paragraph = '';

  for (let i = 0; i < splittedText.length; i++) {
    if (counter < 2) {
      paragraph += splittedText[i] + '.'
      checker = true;
      counter++
    }
    else if (counter == 2) {
      paragraph += splittedText[i] + '.'
      let pElement = document.createElement('p');
      pElement.textContent = paragraph;
      divElement.appendChild(pElement);
      checker = false;
      paragraph = '';
      counter = 0;
    }
  }

  if (checker) {
    let pElement = document.createElement('p');
    pElement.textContent = paragraph;
    divElement.appendChild(pElement);
  }
}