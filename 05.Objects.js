// Defining Objects Using Object Literals

let circle = {
    radius: 4,
    location : {
        x: 1,
        y: 2,
    },
    draw: function(){
        console.log("Drawing Circle Using JavaScript");
    } 
}
circle.draw();

// Creating Objects Using Factory Function
function createCircle(radius){
    return {
        radius,
        draw: function(){
            console.log("Drawing Circle Using JavaScript");
        }
    }
}

const circle1 = createCircle(5);
circle1.draw();

// Creating Objects Using Constructor Function
function Rectangle (length, breadth){
    this.length = length;
    this.breadth = breadth;
    this.area = function (){
        console.log(this.length * this.breadth);
    }
}
const rect1 = new Rectangle(2,3);
rect1.area();

// Enumerating Properties of the Objects
for (let key in circle){
    if (typeof circle[key] != "function")
    console.log(key, circle[key]);
}

// To get the keys of objects
const keys = Object.keys(circle)

// To check property or methods of an object
if ('radius' in circle)
    console.log('yes');