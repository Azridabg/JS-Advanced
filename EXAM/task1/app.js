window.addEventListener('load', solve);

function solve() {

    let nextBtn = document.getElementById("next-btn");
    nextBtn.addEventListener('click', (e) => {

        let thanksP = document.getElementById("thanks-text");
        thanksP.textContent = ``;


        let type = document.getElementById("scent-type");
        let budjet = document.getElementById("budget");
        let occasion = document.getElementById("occasion");
        let brand = document.getElementById("brand");
        let skin = document.getElementById("skin-type");
        let newLiEl = document.createElement('li');

        if (type.value != '' && budjet.value != '' && occasion.value != '' && brand.value != '' && skin.value != '') {

            let parent = document.querySelector(".preference-list");


            newLiEl.classList.add('content');


            let scentEl = document.createElement('p');
            scentEl.textContent = `Scent Type: ${type.value}`;

            let budjetEl = document.createElement('p');
            budjetEl.textContent = `Budget: ${budjet.value} $`;

            let occEl = document.createElement('p');
            occEl.textContent = `Occasion: ${occasion.value}`;

            let brandEl = document.createElement('p');
            brandEl.textContent = `Brand: ${brand.value}`;

            let skinEl = document.createElement('p');
            skinEl.textContent = `Skin Type: ${skin.value}`;

            let newArticle = document.createElement('article');
            newArticle.appendChild(scentEl);
            newArticle.appendChild(budjetEl);
            newArticle.appendChild(occEl);
            newArticle.appendChild(brandEl);
            newArticle.appendChild(skinEl);


            newLiEl.appendChild(newArticle);

            let editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';
            editBtn.classList.add('edit-btn');

            let continueBtn = document.createElement('button');
            continueBtn.textContent = 'Continue';
            continueBtn.classList.add('continue-btn');

            newLiEl.appendChild(editBtn);
            newLiEl.appendChild(continueBtn);


            parent.appendChild(newLiEl);


            let reserved1 = type.value;
            let reserved2 = budjet.value;
            let reserved3 = occasion.value;
            let reserved4 = brand.value;
            let reserved5 = skin.value;
            type.value = '';
            budjet.value = '';
            occasion.value = '';
            brand.value = '';
            skin.value = '';

            nextBtn.disabled = true;


            editBtn.addEventListener('click', () => {
                newLiEl.remove();
                type.value = reserved1;
                budjet.value = reserved2;
                occasion.value = reserved3;
                brand.value = reserved4;
                skin.value = reserved5;
                nextBtn.disabled = false;
            });

            let cancelBtn = document.createElement('button');
            let confirmBtn = document.createElement('button');

            continueBtn.addEventListener('click', () => {
                newLiEl.remove();
                let confirmListEl = document.querySelector(".confirm-list");
                newLiEl.removeChild(editBtn);
                newLiEl.removeChild(continueBtn);


                cancelBtn.textContent = 'Cancel';
                cancelBtn.classList.add('cancel-btn');


                confirmBtn.textContent = 'Confirm';
                confirmBtn.classList.add('confirm-btn');

                newLiEl.appendChild(confirmBtn);
                newLiEl.appendChild(cancelBtn);
                confirmListEl.appendChild(newLiEl);
            });

            confirmBtn.addEventListener('click', () => {
                newLiEl.remove();
                nextBtn.disabled = false;

                let thanksP = document.getElementById("thanks-text");
                thanksP.textContent = `Thank you for sharing your preferences!`;
            });

            cancelBtn.addEventListener('click', () => {
                newLiEl.remove();
                nextBtn.disabled = false;
            });


        }


    });
}
