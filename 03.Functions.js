function add(a,b){
    return parseInt(a) + b;
}
console.log(add(1,2));   // 3
console.log(add(1,"2")); // 12

// Function Expression - When we create a function and assign it to a variable
var minus = function(a,b){
    return parseInt(a) - parseInt(b);
}
console.log(minus(3,2));

var divide = (a,b) => {return a/b};  // Arrow Function
console.log(divide(4,2));
//****************************************************************************************************************** */

// Functions declarations are scanned and made available
console.log(count_many(1,9,5,7)); // You passed 4 parameters and the parameters are 1,9,5,7
function count_many(...para){    // Rest Parameters
    return `You passed ${arguments.length} parameters and the parameters are ${para}`;
}

// Variables declarations are scanned and made undefined
console.log(count_many_again);  // undefined
var count_many_again = function (){
    return `Expecting undefined`;
}

//****************************************************************************************************************** */

// Closure 
// Inner function can access outer function variable But outer function can't access inner function variables
function outer(){
    var x = 100;
    function inner(){
        var y = 200;
        console.log("Value of x is",x);  // Value of x is 100
    }
    inner();
   // console.log("Value of y is ",y);  Gives this error --> Uncaught ReferenceError: y is not defined
};
outer();

//****************************************************************************************************************** */
// Block Scope
var a = 20;
var b = 30;
{
    a = 40;
    let b = 60;
    console.log(`a = ${a}`);  // 40
    console.log(`b = ${b}`);  // 60
}
console.log(`a = ${a}`);  // 40
console.log(`b = ${b}`);  // 30

//****************************************************************************************************************** */
// Self Executing Anonymous Function - OR - IIFE (Immediately Invoked Function Expression)
(
function ()
{
    console.log("Hi, We are still learning JavaScript");
}
)();