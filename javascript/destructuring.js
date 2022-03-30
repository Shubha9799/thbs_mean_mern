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
    address: {  //nested
        current:{
            city:'Ckd',
            pincode: 591201,
            area:'Raviwarpeth'
        },
        permanent:{
            city:'Belgaum',
            state:'Karnataka'
        }
    }
  };
  let {address: {current:{area}}} = user;
  console.log(area); //prints: Masters


  //promise object
  let obj=new Promise((resolve,reject)=>{
      resolve ('JS');
      reject ('JS');
  });
  obj.then((resolve)=>{
      console.log(`Finally learnt promise in ${resolve}`);
  },
  (reject)=>{
      console.log(`did not learn promise in ${reject}`);
  }
  )