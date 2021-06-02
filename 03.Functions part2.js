// Declaring Functions
function add(a,b){
    return a+b;
}
function multiply(){
    let result = 1;
    for(let i = 0; i <arguments.length; i++){
        result *= arguments[i];
    }
    return result;
}
// Calling Functions
console.log(add(5,"6"));
console.log(multiply(2,3));
// Function Hoisting
showMessage();
function showMessage(){
    console.log("Function Hoisting");
}
// Storing function in variable
var calculation = function(a,b){
    return 2*a - 3*b + 4*a*b;
}
console.log(calculation(4,7));
// Passing function to function
var calculation1 = function(a,b, func){
    return func(a,b);
}
console.log(calculation1(2,3,add));
// Anonymous Functions - Functions without name
let displayMessage = function(){
    console.log("Hi I am a anonymous function");
}
displayMessage();
// Anonymous function as an argument
setTimeout(function(){
    console.log("I am being displayed after 2 seconds");
}, 2000)
// Arrow Functions
let substrat = (a,b) => a-b;
let maximum = (a,b) => {
    if (a>b){
        return a;
    }
    else{
        return b;
    }
}
console.log(substrat(3,1));
console.log(maximum(2,3));
// Immediately Invoked Function (IIFE)
// Example 1
(
    function (){
        console.log("Hi I am IIFE");
    }
)();
// Example 2
(
    function(a,b){
        console.log(a-b);
    }
)(2,3);
// Callback Functions - callbacks are functions passed into another functions as an argument
let arr = [1,2,3,4,5,6,7,8,9,10]
function isEven(item){
    if (item % 2 == 0)
    return item;
}
arr_even = arr.filter(isEven);
console.log(arr_even);