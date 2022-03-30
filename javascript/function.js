function getaddress(){
    let add=10+20;
    return "hello"+add;
}
let res=getaddress();
console.log(res);

//passing the parameter
function getaddress2(param, msg){
    let add=10+20;
    return msg+"!!!"+param+add;
}
let result=getaddress2(90,'Good afternoon');
console.log(result);

//flat arrow functions
let myadd=(n1,n2)=>{
    return n1+n2;
}
console.log(myadd(12,3)); //15

//another way 
let add=(n1,n2)=>n1-n2;
console.log(add(30,15)); //15

let bob = a => a + 100;
console.log(bob(10)); //110
