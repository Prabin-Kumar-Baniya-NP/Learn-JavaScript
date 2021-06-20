// Callback functions are the funnction passsed as an argument to another function.
setTimeout(function(){
    console.log("Hi");
}, 5000)

function x(y){
    console.log("x");
    y();
}

x(function(){
    console.log("y");
})

// Count the number of times a button is clicked - (using closure)
function attachEventListener(){
    let count = 0;
    document.getElementById("clickMe").addEventListener("click", function(){
        console.log("Number of times button clicked = ", ++count );
    })
}
attachEventListener();