let page = 1;

const fetchAndDisplayImage = async () => { 
const searchString = document.getElementsByClassName("search-bar")[0].value;

const encodedSearchString = encodeURIComponent(searchString)

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

    fetchAndDisplayImage();
})

const paginationContainer = document.getElementsByClassName("pagination")[0];

const removeActiveClass = () => {
    const currentActiveButton = document.getElementById(page);
    currentActiveButton.className = "pageNumber";
} 

const addActiveClass = (pageNumber) => {
    const newActiveButton = document.getElementById(pageNumber);
    newActiveButton.className = "active pageNumber"
}

paginationContainer.addEventListener("click", (event) => {
    if(event.target.classList.contains("pageNumber") && event.target.id != page) {
        removeActiveClass();
        page = event.target.id;
        addActiveClass(page)
        fetchAndDisplayImage();
    }
})

const decrementButton = document.getElementById("decrement");
const incrementButton = document.getElementById("increment");

decrementButton.addEventListener("click", () =>{
    if(page > 1) {
        removeActiveClass();
        page--
        addActiveClass(page);
        fetchAndDisplayImage();
    }
})

incrementButton.addEventListener("click", () => {
    if(page < 6) {
        removeActiveClass();
        page++
        addActiveClass(page);
        fetchAndDisplayImage();
    }
})