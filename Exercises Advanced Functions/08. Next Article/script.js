function getArticleGenerator(articles) {
    let closureArticles = articles;

    return () => {
        if (closureArticles.length > 0) {
            let article = closureArticles.shift();
            let newArticleElement = document.createElement("article");
            newArticleElement.textContent = article;
            
            let resultElement = document.getElementById("content");
            resultElement.appendChild(newArticleElement);
        }
    }
}
