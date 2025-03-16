// NORMAL CREATING OBJECT VS CREATING A CONSTRUCTOR FUNCTION AND INITIALIZE OBJECT


// Normal object in javaScript

var student1 = {
    name: "Rency",
    age: 22,
    gender: "Male",
    isStudent: true,
    languages: ["C++","JavaScript","Python","Java","Cobol"]
}

var student2 = {
    name: "Angela",
    age: 22,
    gender: "Female",
    isStudent: false,
    languages: ["C#","JavaScript","Swift","Java","Ruby","PHP"]
}

// displaying a value of the property of an object using dot notation
console.log(student1.name);
console.log(student2.name);


//Constructor Function - Notice the Capitalization of the constructor function

function AllStudents (name, age, gender, isStudent, languages){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.isStudent = isStudent;
    this.languages = languages;
}

// Initialize Object
var student1 = new AllStudents("Rency",21,"Male",true,["C++","JavaScript","Python","Java","Cobol"]);
var student2 = new AllStudents("Angela",21,"Female",false,["C#","JavaScript","Swift","Java","Ruby","PHP"]);

console.log(student1.name);
console.log(student2.name);