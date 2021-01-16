var Prabin = {
    First_name : "Prabin",
    Last_name : "Baniya",
    Country : "Nepal",
    get_full_name: function (){
        return this.First_name + " " + this.Last_name;
    }
}

console.log(Prabin.First_name);
console.log(Prabin["Last_name"]);
console.log(Prabin.get_full_name());

var Student = function(first_name, last_name, country){
    this.first_name = first_name;
    this.last_name = last_name;
    this.country = country;
}

var john = new Student("John","Albert","USA");  // Creates a new Objects
var sam = new Student("Sam","Chrits","Russia"); // Creates a new Objects

console.log(john.first_name);
console.log(sam.last_name);
console.log(john.country);

