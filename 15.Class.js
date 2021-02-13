class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    #courseList = [];  // This is now private.
    
    enrollCourse(courseName){
        this.#courseList.push(courseName);
    }

    getCourseList(){
        return this.#courseList;
    }
}

module.exports = User;