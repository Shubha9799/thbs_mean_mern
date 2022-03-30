//array using for loop
let myarr=['hello','how', 'are','you'];
/*for(let i=0;i<myarr.length;i++)
{
    console.log(`i am in ${i} iteration and value is ${myarr[i]}`);
}*/

//using for-each
console.log('---using for each---');
myarr.forEach((ele,index,arr) =>{
    console.log(`value is ${ele} at index ${index}`);
});
console.log('---filtering the array---')
//filtering the array based on condition
let numlist=[20,15,4,6,3];
let ele=numlist.filter((val,index,arr)=>{
    return val>5;
});
console.log(ele);

//filtering the array objects
console.log('---filtering the array objects---')
let plist=[{name:'sai',address:['Belgaum','Karnataka']},
{name:'priya',address:['Pune','Maharashtra']},
{name:'Arya',address:['Nellore','Andrapradesh']},
{name:'Yugh',address:['Kerala']}
];
let filteredlist=plist.filter((val,index)=>{
    //return (val.address.includes('Karnataka'));
    return (val.name.startsWith('Y'));
});
console.log(filteredlist);

console.log('---find()  and findIndex() method---')
let arr=[5,8,10,12,24];
let found=arr.find((ele,index)=>
{
    return ele>10;
});
console.log(found);
let findex=arr.findIndex((ele,index)=>{
    return ele>20;
});
console.log(`Element is at index ${findex}`);

let a1=arr.indexOf(10);
console.log(`index of 10 is ${a1}`);

//flat() method
console.log('----flat()----');
let arr1=[0,1,2,[3,4]];
console.log(arr1.flat());

let arr2=[0,1,2,[[[3,4]]]];
console.log(arr2.flat(2));

//join() method
let myjoin=[23,24,16,28];
let afterjoin=myjoin.join(" * ");
console.log(`After using join method ==> ${afterjoin}`);

//map() method
console.log('-----Map() method-----');
let sub=[{name: 'java',batch:99},
{name:'html',batch:99},
{name:'css',batch:99}];
let mappedArray = sub.map((val, inx, arr) => {
    val.name = "Learning " + val.name; //modifed value 
    return val;
});
console.log(mappedArray);








