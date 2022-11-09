let arrayOfPeople = [];

async function fetchPeople() {
    let next = true;
    let page = 1;

    while (next) {
        const result = await fetch(`https://swapi.dev/api/people/?page=${page}`);
        const resultJson = await result.json();

        for(let i = 0; i < resultJson.results.length; i ++) {
            arrayOfPeople.push(resultJson.results[i]);
        }

        next = resultJson.next;
        page++
    }
    
    renderNames(arrayOfPeople);
}

// function renderNames(arrayOfResults) {
//     const nameHtmlArray = arrayOfResults.map(function(result) {
//         return `
//         <p>${result.name}</p>
//          `
//     })
//     const nameHtml = nameHtmlArray.join('');
//     const nameDiv = document.getElementById("people");
//     nameDiv.innerHTML = nameHtml;
// }

function renderNames(arrayOfResults) {
    let nameHtmlString = '';
    for (let i = 0; i < arrayOfResults.length; i++) {
        nameHtmlString += `<p>${arrayOfResults[i].name}</p>`
    }
    const nameDiv = document.getElementById("people");
    nameDiv.innerHTML = nameHtmlString;
}

fetchPeople();

