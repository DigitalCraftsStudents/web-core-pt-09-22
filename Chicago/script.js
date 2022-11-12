let page = 1;

const fetchAndDisplayImage = async (exampleSearchBox) => { 

const encodedSearchString = encodeURIComponent(exampleSearchBox)

const result =  await fetch(`https://api.artic.edu/api/v1/artworks/search?q=${encodedSearchString}&fields=id,title,image_id&page=${page}`)
const parsedResponse = await result.json();
console.log(parsedResponse)
const htmlArray = [];
    for (let i = 0; i < parsedResponse.data.length; i++)
    {
        const src = `https://www.artic.edu/iiif/2/${parsedResponse.data[i].image_id}/full/843,/0/default.jpg`
        const imgHtml = `<img src=${src}></img>`
        htmlArray.push(imgHtml)
    }

const htmlString = htmlArray.join('');
document.getElementById("imageContainer").innerHTML = htmlString;
}

const searchForm = document.getElementById("search-form");
searchForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const searchString = document.getElementsByClassName("search-bar")[0].value;
    
    fetchAndDisplayImage(searchString);
})

const changePage = (pageNumber) => {
    page = pageNumber;
}

const paginationContainer = document.getElementsByClassName("pagination")[0];

paginationContainer.addEventListener("click", (event) => {
    if(event.target.classList.contains("pageNumber")) {
        const currentActiveButton = document.getElementById(page);
        currentActiveButton.className = "pageNumber";

        event.target.className = "active pageNumber"
        
        page = event.target.id;
        console.log("new page number is:", page)
    }
})