// Variables, Data Type, Operators
var first_name = "Prabin"; // String
var middle_name = "Kumar"; // String
var age = 19; // Number
const gender = "Male";
var lives_in_nepal = true;  // Boolean
console.log("Is " + first_name + " " + middle_name + " lives in" + " Nepal ?");
console.log(lives_in_nepal);
console.log(`
    Data Type of first name is ${typeof(first_name)}
    Data Type of middle name is ${typeof(middle_name)}
    Data type of age is ${typeof(age)}
    Data type of gender is ${typeof(gender)}
    Data type of lives in Nepal is ${typeof(lives_in_nepal)} 
`);
//****************************************************************************************************** */
var random; // undefined
var i_am_not_num = first_name/2;  // NaN
console.log(random);  // undefined
console.log("Data type of random variable is " + typeof(random));
console.log(i_am_not_num);
console.log("Data type of i_am_not_num variable is " + typeof(i_am_not_num));
//****************************************************************************************************** */
var operation1 = 2 + 5;
var operation2 = 2 * 5;
var operation3 = 2 / 5;
var operation4 = 2 ^ 5;
console.log(`
    ${operation1}
    ${operation2}
    ${operation3}
    ${operation4}
`);
//****************************************************************************************************** */