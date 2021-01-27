function doAddition(num1){
    return function(num2){
        return num1 + num2;
    }
}

var calculator = doAddition(5);
console.log(calculator(2));
console.log(doAddition(10)(10));