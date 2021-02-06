var courses = [
    {
        name : "Complete ReactJS Course",
        price : "2.3", 
    },
    {
        name : "Python Course",
        price : "1.9", 
    },
    {
        name : "Complete Django Course",
        price : "2.9", 
    },
    {
        name : "Advanced JavaScript Course",
        price : "3.1", 
    },
];

function generateList(){
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";
    courses.forEach((course) =>{

        const li = document.createElement("li");
        li.classList.add("list-group-item");
        const name = document.createTextNode(course.name);
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("float-right");
        const price = document.createTextNode("$ " +course.price);
        span.appendChild(price);

        li.appendChild(span);
        ul.appendChild(li);
    });

}

// generateList();
window.addEventListener("load", generateList);

const button = document.querySelector(".sort-btn");

button.addEventListener("click", () => {
    courses.sort((a,b) => b.price - a.price);
    generateList();
});