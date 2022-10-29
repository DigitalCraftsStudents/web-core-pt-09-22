const myPromise = new Promise((resolve, reject) => {   
    setTimeout(() => {
        reject('Promise is rejected');  
    }, 2000)
});

async function fetchData() { await myPromise
.then((result) => console.log("The promise resolved! Here's our data:", result))
.catch((error) => console.log("Something went wrong! Here's the promise error:", error))
}

fetchData();