function fetchWiki() {
fetch('https://en.wikipedia.org/api/rest_v1/page/random/title')
    .then(response => response.json())
    .then(data => {
        const pageTitle = data.items[0].title;
        var linkWiki = 'https://en.wikipedia.org/wiki/' + pageTitle;

        const element = document.createElement('div');
        element.classList.add('wiki');
        element.innerHTML = `
            <a href="${linkWiki}">
                <h1>${pageTitle}</h1>
            </a> 
        `;
        
        elements.push(element);
    })
    
     const resultsContainer = document.getElementById('results');
     const elements = [];
     elements.forEach(element => {
         resultsContainer.appendChild(element);
     })
        .catch(error => console.error('error:', error))
    }



function updateValue() {
    var rangeInput = document.getElementById("myRange");
    var value = rangeInput.value;
    console.log("valor:" + value);
        for (let i = 0; i < value; i++) 
        {
        fetchWiki();
    }

}

function showValue() {
    var rangeInput = document.getElementById("myRange");
    var value = rangeInput.value;
    document.getElementById("varhone").innerText = value;
}
