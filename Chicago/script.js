const fetchAndDisplayImage = async () => { 

const exampleSearchBox = "dogs";
const result =  await fetch(`https://api.artic.edu/api/v1/artworks/search?q=${exampleSearchBox}&fields=id,title,image_id`)
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
console.log(htmlString)
document.getElementById("imageContainer").innerHTML = htmlString;
}

const searchForm = document.getElementById("search-form");
searchForm.addEventListener("submit", function(event) {
    event.preventDefault();
    fetchAndDisplayImage();
})