function hello() {
    var a = "function"; // available globally
    for (var i = 0; i < 5; i++) {
        let a= "block"; 
    }
    console.log(a);  //output:function
}
hello();

function fun() {
    var a = "function"; 
    for (var i = 0; i < 5; i++) {
        var b= "block"; // if we  declar b with let keywork will not be accessible outside of loop
    }
    console.log(b); //output:block
}
fun();


//Declaring const variable
const Name = 'Javascript';
// Name = 'Typescript';  Error:const variable value cannot be changed

function temp() {
    if (true) {
        const tmp = 1234;
        console.log(tmp);// Uncaught ReferenceError: tmp is not defined} 
    }
}
temp();

//const object
const myObj = {};
//Object.freeze(myObj); //no changes will be allowed
myObj['fname'] = 'Aarya';
console.log(myObj);


//Template strings
let message = 'Typescript';
//ES5 way
let single = message + ' is\n' + 'the\n' + 'superset\n' + 'of\n' + 'Javascript\n';
console.log(single)

// ES6 ways of string concat 
let myMsg =
    `
${message}
is 
a
superset
of 
javascript
`;

console.log(myMsg);