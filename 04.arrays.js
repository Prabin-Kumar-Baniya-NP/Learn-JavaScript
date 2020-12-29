// Single dimensional Array
var arr1 = [1,2,3,4,5,6,7,8,9,10];
var arr2 = new Array();
var arr3 = new Array(1,2,3,4,5);
var arr4 = new Array(5);

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);

// Multi-dimensional Array
var arr5 = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]
]

var arr6 = new Array([]);
var arr7 = new Array([1,2,3,4],[5,6,7,8],[9,10,11,12]);
console.log(arr5);
console.log(arr6);
console.log(arr7);

console.log("Concatenate",arr1.concat(arr3));
console.log("Join",arr1.join(" plus "));
console.log("Slice",arr1.slice(2,4));
var arr8 = [1,2,3,4,5,6,7,8,9,10]
console.log("Fill",arr8.fill(111,2,4));  // fill(value,start,end)- fills the value in the given index range.
var arr9 = [1,2,3,4,5,6,7,8,9,10]
arr9.splice(2,4,111);                     // splice(start,number_of_elements,value) - replaces the value in the givem index range
console.log("Splice",arr9);   
console.log("Filter",arr1.filter((num) => {return num < 5}));
console.log("Filter",arr1.filter((num) => (num > 5)));
//********************************************************************************************************************************* */
// Understanding basics of Callback Function

function iseven(e){
    return e%2 == 0;
}

var result1 = [2,4,6,8].every((e)=>(e%2==0));  // Callback Function
var result2 = [2,4,6,8].every(iseven);
console.log(result1);
console.log(result2);
//********************************************************************************************************************************* */