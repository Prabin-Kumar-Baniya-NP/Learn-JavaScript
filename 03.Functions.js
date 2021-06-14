// Function Statement OR Function Declaration
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

// Difference between Function Statement and function expression is hoisting.

// Named Function Expression
var multiply = function mult(a, b){
    return parseInt(a) * parseInt(b);
}

multiply(2,3) // 6
// mult(2,3) --> Gives error => mult is not defined

/*
    Difference between parameters and arguments
    Parameter - a, b in previous function
    Arguments - 2, 3 in previous function
*/

/*
    First Class Function / First Class Citizens
    The ability to use function as a value and pass that function to another function as an arguments
    as well as return function from the function is called first class function 
*/
function calc(fn){
    return function (){
        console.log("Adding");
    } // function is returned
}
var calculation1 = calc(add); // function is passed as an arguments and


// Arrow Function
var divide = (a,b) => {return a/b};  // Arrow Function
console.log(divide(4,2));
//****************************************************************************************************************** */

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
// Self Executing Anonymous Function - OR - IIFE (Immediately Invoked Function Expression)
(
function ()
{
    console.log("Hi, We are still learning JavaScript");
}
)();