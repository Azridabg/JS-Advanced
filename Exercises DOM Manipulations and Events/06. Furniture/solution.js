function solve() {
  let textAreaElement = document.querySelector('#container textarea[rows="5"]');
  let buttonsElements = document.querySelectorAll('#container button');
  Array.from(buttonsElements).forEach(e => e.addEventListener('click', (el) => {

    if (el.target.textContent == 'Generate') {
      let jsonObj = JSON.parse(textAreaElement.value);
      let tableElement = document.querySelector('table tbody');



      for (let i = 0; i < jsonObj.length; i++) {
        let newTrElement = document.createElement('tr');
        let newTdForName = document.createElement('td');
        let newTdForPrice = document.createElement('td');
        let newTdForImg = document.createElement('td');
        let newTdForDecFactor = document.createElement('td');
        let newTdForInput = document.createElement('td');



        let nameOfProduct = jsonObj[i].name;
        let priceOfProduct = jsonObj[i].price;
        let imgOfProduct = jsonObj[i].img;
        let decFactorOfProduct = jsonObj[i].decFactor;

        // The image element creation
        let newImgProperty = document.createElement('img');
        newImgProperty.src = imgOfProduct;
        newTdForImg.appendChild(newImgProperty);
        newTrElement.appendChild(newTdForImg);

        // The name element creation
        let newPProperty = document.createElement('p');
        newPProperty.innerHTML = nameOfProduct;
        newTdForName.appendChild(newPProperty);
        newTrElement.appendChild(newTdForName);

        // The price element creation
        let newPElementForPrice = document.createElement('p');
        newPElementForPrice.textContent = priceOfProduct;
        newTdForPrice.appendChild(newPElementForPrice);
        newTrElement.appendChild(newTdForPrice);

        // The Dec Factor element creation
        let newPElementForDF = document.createElement('p');
        newPElementForDF.textContent = decFactorOfProduct;
        newTdForDecFactor.appendChild(newPElementForDF);
        newTrElement.appendChild(newTdForDecFactor);


        // The input element creation
        let newInputElement = document.createElement('input');
        newInputElement.type = 'checkbox';
        newInputElement.disabled = false;
        newTdForInput.appendChild(newInputElement);
        newTrElement.appendChild(newTdForInput);
        tableElement.appendChild(newTrElement);
      }


    }


    else if (el.target.textContent == 'Buy') {
      let buyTextAreaElement = document.querySelector('#container textarea[rows="4"]');
      let tableElementTd = Array.from(document.querySelectorAll('tr td'));
      let fullprice = 0;
      let decFactorCounter = 0;
      let averageDecFactor = 0;
      let boughtFurniture = [];


      let index = 0;
      
      for (let i = 0; i < tableElementTd.length / 5; i++) {


if(tableElementTd[index+4].children[0].checked) {


  boughtFurniture.push(tableElementTd[index + 1].textContent);
  fullprice += Number(tableElementTd[index + 2].textContent);
  averageDecFactor+= Number(tableElementTd[index + 3].textContent);
  decFactorCounter++;


}


index+=5;


     }


     averageDecFactor /= decFactorCounter;



     buyTextAreaElement.textContent= `Bought furniture: ${boughtFurniture.join(', ')}
Total price: ${fullprice.toFixed(2)}
Average decoration factor: ${averageDecFactor}`;
    }
  }));
}