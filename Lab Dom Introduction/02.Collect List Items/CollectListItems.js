    function extractText() {
        let liCollection = document.querySelectorAll("#items li");
        let resultElement = document.getElementById("result");

        const items = Array.from(liCollection).map((li) => {
            return li.textContent;
        });

        resultElement.textContent = items.join("\n")
    }