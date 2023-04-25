const a = 10;
const b = true;
console.log(b);
console.log("From External JS file");
console.log(a); //Expression Statement

var ax;
let bx;
ax = 12;
bx = "Johnson";
let myName = "Adriel Walker of Liberia";
let cost = 23; //Statement
let newPropertyName = "weight";
console.log(myName);

const student = { 
    age:23, 
    name: "Adriel", 
    country: "Ghana",
    education: {
        qualification: "Bsc",
        specialization: "Business Management",
        class: "1st"
    }
};

student.name = "Adriel Walker in Ghana";
function sum(a, b) {
    let c = a + b;
    console.log(c);
}

console.log(student.name)
console.log(student)
delete student.age;
student['fire'] = false;
student[newPropertyName] = '19.3kg';
console.log(student);
console.log(student.education.qualification);
sum(24,56);
sum("23",4); //ensure you validate value

function myFn(axz){
    console.log(axz);
};

myFn(126, b);

;(
    function(a){
        console.log("Hello");
    }
)() 

//This would be executed