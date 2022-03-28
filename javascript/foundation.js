let batch=99;
console.log(batch); //99
console.log(typeof batch); //number

//updating the value
batch='nine nine';
console.log(batch);  //nine nine
console.log(typeof batch);  //string


let specialization='MEAN/MERN';
console.log(specialization);  //MEAN/MERN
console.log(typeof specialization);  //string

//block scope
let allPresent=true;
console.log(allPresent); //true
console.log(typeof allPresent); //boolean

//functions
function addTypes(var1,var2)
    {
        return var1+var2;
    }
console.log(addTypes(10,20)); //30
console.log(addTypes('Riya','Sharma')); //RiyaSharma
console.log(addTypes('T',20)); //T20