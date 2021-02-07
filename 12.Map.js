var myMap = new Map();
myMap.set(1, "Kathmandu");
myMap.set(2, "Delhi");
myMap.set(3, "Dhaka");
myMap.set(4, "Washington DC");

console.log(myMap);
/*
Output:
Map {
  1 => 'Kathmandu',
  2 => 'Delhi',
  3 => 'Dhaka',
  4 => 'Washington DC'
}
*/

for(let key of myMap.keys()){
    console.log(`Key is ${key}`);
}
/*
Output:
Key is 1
Key is 2
Key is 3
Key is 4
*/

for(let value of myMap.values()){
    console.log(`Value is ${value}`);
}
/*
Output:
Value is Kathmandu
Value is Delhi
Value is Dhaka
Value is Washington DC
*/

for(let [key, value] of myMap){
    console.log(`Key is ${key} and Value is ${value}`);
}
/*
Output:
Key is 1 and Value is Kathmandu
Key is 2 and Value is Delhi
Key is 3 and Value is Dhaka
Key is 4 and Value is Washington DC
*/

myMap.forEach((value, key) => console.log(`Value is ${value} and its corresponding key is ${key}`));
/*
Output:
Value is Kathmandu and its corresponding key is 1
Value is Delhi and its corresponding key is 2
Value is Dhaka and its corresponding key is 3
Value is Washington DC and its corresponding key is 4
*/