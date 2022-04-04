let mypromise=new Promise((resolve,reject)=>{
    resolve('success')
    reject('fail')
});
mypromise.then((resolve)=>{
console.log(`I am good at promise`);
},
(reject)=>{
    console.log(`Not good at promise`);
}
)