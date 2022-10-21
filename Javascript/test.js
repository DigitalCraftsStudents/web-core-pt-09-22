// let n = 0;

// console.log(n);
// n ="bob";

// let book = {title: "bob", pages: 300}

// console.log(n);

// function createBook() 
// {
//     const text = "Is Big text";
//     console.log(book);

//     function logPage() 
//     {

//     }
//     logPage();

// }

// console.log(text);

// let balloons;
// while (balloons > 0)
// {
//         console.log("HAVE FUN!!!!")
//         balloons --;

// }

// console.log("we're not having fun")

// for (let balloons = 100; balloons > 0; balloons--)
// {
//     // if (balloons > 0 ) {
//     //     console.log("Were having fun")
//     // } else  {
//     //     console.log("we're not having fun")
//     // }
//     console.log(`${balloons} Were having fun`)

// }
// console.log("we're not having fun")

// for (let balloons = 0; balloons < 100; balloons++)
// {
//     console.log(`I've blown up ${balloons + 1} balloons`);
// }



let balloonOne = {color:"red", size: "large"}
// console.log(balloonOne);
// balloonOne.size = "medium";
// console.log(balloonOne);
let balloonTwo = {color:"blue", size: "medium"}

let balloonThree = {color:"green", size: "small"}
let balloonFour = {color:"orange", size: "large"}
let balloonFive = {color:"red", size: "small"}

let balloonArray = [balloonOne, balloonTwo, balloonThree, balloonFour, balloonFive];

function size (balloon)
{
    if (balloon.size !== 'medium')
    {
        balloon.size = 'medium';

        return true;

    }
    else 
    {
        return false;
    }


//     if (balloonArray[i].size !== 'medium')
//     {
//         console.log(balloonArray[i].size);
//         balloonArray[i].size = 'medium';
//     }
}

for (let balloonIndex = 0; balloonIndex < balloonArray.length; balloonIndex++)
{
   const balloon = balloonArray[balloonIndex];
   const didSizeUpdate = size (balloon);

   console.log(`ballon ${balloonIndex} size was updated is ${didSizeUpdate}`)
   console.log(balloon);
}