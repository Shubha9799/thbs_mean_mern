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
let plist=[{name:'sai',skill:['java','js','css']},
{name:'priya',skill:['java','js','html']},
{name:'Arya',skill:['js','html']},
{name:'Yugh',skill:['js']}
];
let filteredlist=plist.filter((val,index)=>{
    return (val.skill.includes('java'));
   // return (val.name.startsWith('Y'));
});
console.log(filteredlist);