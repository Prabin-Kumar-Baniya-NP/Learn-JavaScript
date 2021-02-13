// import User from "./15.Class";

const User = require("./15.Class");

var Prabin = new User("Prabin", "prabin@gmail.com");
Prabin.enrollCourse("React Bootcamp");
Prabin.enrollCourse("Node.js Bootcamp");
console.log(Prabin.getCourseList());
