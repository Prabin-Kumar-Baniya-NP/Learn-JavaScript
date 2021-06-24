// Promises
getJSON1 = fetch("https://jsonplaceholder.typicode.com/todos/1")
.then(response => {
    if(!response.ok){
        throw new Error(`HTTP error! status ${response.status}`);
    }
    return response.json();
})
.then(data => {
    console.log(data);
})
.catch(errror => console.log("Something went wrong"));

// Async and await
async function getJSON2(){
   try {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/2");

    if (!response.ok){
        throw new Error(`HTTP status ${response.status}`);
    }
    let data = await response.json();
    console.log(data);
   }
   catch(error){
       console.log(error);
   }
}
getJSON2();