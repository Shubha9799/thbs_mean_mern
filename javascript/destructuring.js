let color=['red','blue','green'];
let [one, ,two]=color; //2nd is empty
console.log(one,two);

//object de-structuring
let getPersonInfo=()=>{
    return{
        op:"plus",
        lhs:"left-hand-side",
        rhs:"right-hand-side"
    }
}
var tmp=getPersonInfo();
console.log(tmp);
//es5 way
var op1=tmp.op;
var lhs1=tmp.lhs;
var rhs1=tmp.rhs;

//ES6 way
let {op,lhs,rhs}=getPersonInfo();
console.log(op,lhs,rhs);


//another example
let cmp={name:'thbs',
emp:100,
foundation:'march 2020'};
let {emp}=cmp;
console.log(emp);

//nested destructuring
let user = {
    id: 663,
    name: 'Shubhangi',
    age: 23,
    education: {  //nested
      degree: 'BE'
    }
  };
  const {education: {degree}} = user;
  console.log(degree); //prints: Masters