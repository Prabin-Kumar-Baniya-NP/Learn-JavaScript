let task1 = new Promise((resolve, reject) => {
    let completed = true;
    if (completed)
        resolve("Task 1 Downloaded");
    else
        resolve("Task 1 Failed to download");
})

let task2 = new Promise((resolve, reject) => {
    let completed = false;
    if (completed)
        resolve("Task 2 Downloaded");
    else
        resolve("Task 2 Failed to download");
})

let task3 = new Promise((resolve, reject) => {
    let completed = true;
    if (completed)
        resolve("Task 3 Downloaded");
    else
        reject("Task 3 Failed to Download");
})


task1.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
})

task2.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
})

task3.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
})

Promise.all([task1, task2, task3])
.then((messages) => {
    console.log(messages);
}).catch((errors) => {
    console.log("Try again");
})