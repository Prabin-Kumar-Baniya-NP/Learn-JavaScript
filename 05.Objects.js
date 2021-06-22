// Defining Objects Using Object Literals

let circle = {
    radius: 4,
    location: {
        x: 1,
        y: 2,
    },
    draw: function () {
        console.log("Drawing Circle Using JavaScript");
    }
}
circle.draw();

// Creating Objects Using Factory Function
function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log("Drawing Circle Using JavaScript");
        }
    }
}

const circle1 = createCircle(5);
circle1.draw();

// Creating Objects Using Constructor Function
function Rectangle(length, breadth) {
    this.length = length;
    this.breadth = breadth;
    this.area = function () {
        console.log(this.length * this.breadth);
    }
}
const rect1 = new Rectangle(2, 3);
rect1.area();


// Creating objects using Object Constructor
let cycle = new Object();
cycle.Model = "XYZ";
cycle["Price"] = 453264;
cycle.getInfo = function () {
    return `Model is ${this.Model} and Price is ${this.Price}`;
}

console.log(cycle.getInfo());

var Car = function (name, color, price) {
    this.name = name
    this.color = color
    this.price = price
    this.check_price = function () {
        if (this.price >= 2000000) {
            return 'Expensive Car'
        } else {
            return 'Cheap Car'
        }
    }
}

var maruti = new Car('suzuki', 'white', '1500000')
var ferrari = new Car('F120', 'red', '9900000')
console.log(maruti.name)
console.log(ferrari.check_price())

// Enumerating Properties of the Objects
for (let key in circle) {
    if (typeof circle[key] != "function")
        console.log(key, circle[key]);
}

// To get the keys of objects
const keys = Object.keys(circle)

// To check property or methods of an object
if ('radius' in circle)
    console.log('yes');

// Prototype and Prototypal Inheritance in JavaScript
function City(name, country){
    this.name = name;
    this.country = country;
}
let delhi = new City("Delhi", "India");
// delhi.getCityInfo(); // returns error
Object.prototype.getCityInfo = function(){
    console.log(`Name is ${this.name} and Country is ${this.country}`);
}
delhi.getCityInfo();

// Classes
class Grandfather{
    constructor(){
        this.money = 1000;
    }
    showbalance(){
        console.log(this.money);
    }
}

class Father extends Grandfather{
    constructor(){
        super();
        this.money = this.money + 500;
    }
}
class Daughter extends Father{
    constructor(){
        super();
        this.money = this.money + 200;
    }
}

class Son extends Father{
    constructor(){
        super();
        this.money = this.money + 100;
    }
}

let GF = new Grandfather();
let F = new Father();
let D = new Daughter();
let S = new Son();
GF.showbalance();
F.showbalance();
D.showbalance();
S.showbalance();