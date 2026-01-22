function solve() {
   let productsList = Array.from(document.getElementsByClassName('add-product'));
   let resultObj = {};
   productsList.forEach((e) => {
      e.addEventListener('click', function (e) {
         let title = e.currentTarget.parentElement.parentElement.querySelector(".product-title").textContent;
         let price = Number(e.currentTarget.parentElement.parentElement.querySelector(".product-line-price").textContent);

         if (resultObj.hasOwnProperty(title)) {
            resultObj[title] += price;
            let textArea = document.querySelector("textarea");
            textArea.textContent += `Added ${title} for ${price.toFixed(2)} to the cart.\n`;
         }
         else {
            resultObj[title] = price;
            let textArea = document.querySelector("textarea");
            textArea.textContent += `Added ${title} for ${price.toFixed(2)} to the cart.\n`;
         }


      });
   });



   let checkoutBtn = document.querySelector(".checkout");
   checkoutBtn.addEventListener('click', function (e) {
      let sum = 0;
      let products = [];

      for (let [product, price] of Object.entries(resultObj)) {
         products.push(product);
         sum += price;
      }

      let textArea = document.querySelector("textarea");

      textArea.textContent += `You bought ${products.join(', ')} for ${sum.toFixed(2)}.`



      let productsList = Array.from(document.getElementsByClassName('add-product'));
      
      productsList.forEach((e) => {
         e.disabled = true;
      });
      checkoutBtn.disabled = true;
   });
}