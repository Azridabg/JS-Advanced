function encodeAndDecodeMessages() {
    let buttonsElements = document.querySelectorAll('#main div button');
    Array.from(buttonsElements).forEach(e => e.addEventListener('click', (el) => {
        if (el.target.innerHTML == 'Encode and send it') {
            let getTextAreaElement = document.querySelector('textarea[placeholder="Write your message here..."]');
            let putTextAreaElement = document.querySelector('textarea[placeholder="No messages..."]');
            let splitText = getTextAreaElement.value.split('');
            let encodedText = [];
            let encodedSentance = [];

            for (let i = 0; i < splitText.length; i++) {
                let sentance = splitText.join('');
                encodedSentance.push(sentance.charCodeAt(i) + 1);
                let string = encodedSentance.pop();
                encodedText.push(String.fromCharCode(string))
            }

            putTextAreaElement.value = encodedText.join('');

            getTextAreaElement.value = '';
        }


        else if (el.target.innerHTML == 'Decode and read it') {
            let putTextAreaElement = document.querySelector('textarea[placeholder="No messages..."]');
            let splitText = putTextAreaElement.value.split('');
            let encodedText = [];
            let encodedSentance = [];

            for (let i = 0; i < splitText.length; i++) {
                let sentance = splitText.join('');
                encodedSentance.push(sentance.charCodeAt(i) - 1);
                let string = encodedSentance.pop();
                encodedText.push(String.fromCharCode(string))
            }

            putTextAreaElement.value = encodedText.join('');
        }
    }));
}