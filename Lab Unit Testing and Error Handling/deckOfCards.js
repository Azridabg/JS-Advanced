function deckOfCards(arr) {

    function cards(face, suit) {
        let validFace = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let validSuits = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663'
        };

        if (validFace.indexOf(face) == -1) throw Error(`Invalid face: ${face}`);
        if (!validSuits.hasOwnProperty(suit)) throw Error(`Invalid suit: ${suit}`);

        return {
            face,
            suit: validSuits[suit],
            toString() {
                return this.face + this.suit;
            }
        }

    }


    let resultArr = [];
    for (const card of arr) {
        const face = card.slice(0, -1);
        const suit = card.slice(-1);
        try {
            const cardObj = cards(face, suit)
            resultArr.push(cardObj);
        } catch (ex) {
            console.log(`Invalid card: ` + card);
            return;
        }
    }


    console.log(resultArr.join(' '));


    
}

deckOfCards(['5S', '3D', 'QD', '1C']);