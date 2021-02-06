var Prabin = {
    firstName: "Prabin",
    lastName: "Baniya",
    address: "Butwal, Nepal",
    getInfo: function(){
        return console.log(`
            First Name is ${this.firstName}
            Last Name is ${this.lastName}
            Address is ${this.address}
        `);
    }
}

var Ashok = {
    firstName: "Ashok",
    lastName: "Devkota",
    address: "Butwal, Nepal",
    getInfo: function(){
        return console.log(`
            First Name is ${this.firstName}
            Last Name is ${this.lastName}
            Address is ${this.address}
        `);
    }
}

Prabin.getInfo();
var AshokInfo = Prabin.getInfo.bind(Ashok);  // bind returns function reference
AshokInfo(); // calling the function

Prabin.getInfo.call(Ashok); // calls the function