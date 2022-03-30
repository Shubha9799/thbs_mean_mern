
  let mythbs=new Promise((resolve,reject)=>{
     
         resolve('THBS')
        //reject('thbs')

  });
  mythbs.then((success)=>{
      console.log(`I am in success callback of promise ${success}`);
  },(reject)=>{
      console.log(`I am in reject callback of promise ${reject}`);
  })
  //promise chaining
  .then((sval)=>{
      console.log(` I am in success chain ${sval}`);
  },(rval)=>{
      console.log(`I am in reject chain ${rval}`);
  })
  .then((sval)=>{
    console.log(`1111 I am in success chain ${sval}`);
},(rval)=>{
    console.log(`2222 I am in reject chain ${rval}`);
})
  .catch((onReject)=>{
      console.log(`I am in catch block`);
  })
