const fetchAndDisplayImage = async (exampleSearchBox) => { 

const encodedSearchString = encodeURIComponent(exampleSearchBox)
const page = 1;

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