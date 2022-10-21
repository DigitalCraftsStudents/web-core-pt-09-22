// console.log(document);
// const testElement = document.getElementById("test");
// const divTag = document.createElement("div");
// testElement.appendChild(divTag);
const helloButton = document.getElementsByClassName("number");

const bodyElements = document.getElementsByTagName("body");
if (bodyElements.length > 0) 
{
// const h1Tag = document.createElement("h1");
// h1Tag.innerText = "HEY! THIS IS BALLON 1!";




let counter = 0;
let bodyOfHtml = ''
const ballonParent = document.createElement('div');
for (counter = 0 ; counter < 5; counter ++)
{
   const ballon =  createBallon(counter,"medium" , "green");
   bodyOfHtml += ballon;
  // bodyElements[0].appendChild(ballon);

}
ballonParent.innerHTML = bodyOfHtml;
bodyElements[0].appendChild(ballonParent);
}

for (let i = 0; i < helloButton.length; i++)
{
    console.log(helloButton[i].dataset)
    const dataAtt = helloButton[i].dataset.value;
 helloButton[i].addEventListener("click", (event) => addNumbersToArray(dataAtt));

}
let array = [];
function addNumbersToArray(number)
{
    array.push(number);
    console.log(array);
}
function changeColor(event) 
{
    console.log(event);
    console.log("hello)")
    console.log(event.target)
    if(event.target.className === 'badColor')
    {
        event.target.className = 'goodColor'
    }
    else{
        event.target.className = 'badColor'
    }
    //event.target.style = `background-color:#${Math.floor(Math.random()*16777215).toString(16)}`;


}
function createBallon(counter,size, color)
{
    return `<div>
            <h1>THIS IS A ${size} BALLON ${counter}<h1/>
             <h2>IT IS ${color} </h2>
             </div>`
}