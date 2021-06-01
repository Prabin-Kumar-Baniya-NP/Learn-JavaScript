let a1 = [1,2,3,4,5,6]
let a2 = [11,22,33,44,55,66]
// Adding and removing at last index
a1.push(7);
a1.pop();
// Adding and removing at index 0
a1.unshift(0);
a1.shift();
// Adding and removing any where in array using index number
a1[1] = 22;
a1.splice(1,1); // postion, number of element
console.log(a1);
a1.forEach((item, index) => console.log("Value at index " + index + " is " + item));
a1.forEach((item, index) => {
    if (item % 2 == 0){
        console.log("Even number found at index" + index);
    }
    else{
        console.log("Odd number found at index" + index);
    }
})
// Array concatenation
console.log(a1.concat(a2));
// every
console.log(a1.every((item) => {
    if (item > 0){
        return true;
    }
}));
// fill
console.log(a1.fill(0, 2,4));
// filter
var a2_even = a2.filter((item) => {
    if (item % 2 == 0){
        return item;
    }
})
var a2_odd = a2.filter((item) => {
    if (item % 2 != 0){
        return item;
    }
})
console.log(a2_even);
console.log(a2_odd);
// find - returns first value which staisfies the given testing function
console.log(a2.find((item) => {
    if (item > 20){
        return item;
    }
}))
// indexOf
console.log(a2.indexOf(22));
// includes
console.log(a2.includes(22));
// join
console.log(a2.join(","));
// map
console.log(a2.map((item) => item**2));