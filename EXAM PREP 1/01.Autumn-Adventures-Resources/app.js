window.addEventListener('load', solve);

function solve(ev) {




    let addBtn = document.getElementById("add-btn");
    addBtn.addEventListener('click', (e) => {
        let time = document.getElementById("time");
        let date = document.getElementById("date");
        let place = document.getElementById("place");
        let eventName = document.getElementById("event-name");
        let email = document.getElementById("email");
        let newLiEl = document.createElement('li');

        if (time.value != '' && date.value != '' && place.value != '' && eventName.value != '' && email.value != '') {

            let parent = document.getElementById("check-list");


            newLiEl.classList.add('event-content');


            let beginsP = document.createElement('p');
            beginsP.textContent = `Begins: ${date.value} at:  ${time.value}`;

            let inP = document.createElement('p');
            inP.textContent = `In: ${place.value}`;

            let eventP = document.createElement('p');
            eventP.textContent = `Event: ${eventName.value}`;

            let contact = document.createElement('p');
            contact.textContent = `Contact: ${email.value}`;

            let newArticle = document.createElement('article');
            newArticle.appendChild(beginsP);
            newArticle.appendChild(inP);
            newArticle.appendChild(eventP);
            newArticle.appendChild(contact);

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


            let reserved1 = date.value;
            let reserved2 = time.value;
            let reserved3 = place.value;
            let reserved4 = eventName.value;
            let reserved5 = email.value;
            date.value = '';
            time.value = '';
            place.value = '';
            eventName.value = '';
            email.value = '';

            addBtn.disabled = true;


            editBtn.addEventListener('click', () => {
                newLiEl.remove();
                date.value = reserved1;
                time.value = reserved2;
                place.value = reserved3;
                eventName.value = reserved4;
                email.value = reserved5;
                addBtn.disabled = false;
            })
        }


    });








}




