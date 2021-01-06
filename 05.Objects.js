var user = {
    First_name : "Prabin",
    Last_name : "Baniya",
    Country : "Nepal",
    get_full_name: function (){
        return this.First_name + " " + this.Last_name;
    }
}

console.log(user.First_name);
console.log(user["Last_name"]);
console.log(user.get_full_name());

