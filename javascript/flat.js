let obj={name:"thbs",
saylater:function()
{
    console.log(`${this.name}`);
}};
obj.saylater();


/*let obj2={name:"thbs",
later:()=>{                   //using flat arrow
    console.log(this);             //error:this cannot be accessed in flat arrow.
    console.log(this.getAddress());
    console.log(`${this.name}`);   
},
getAddress:function(){

   return  'Bangalore';
}

};
obj2.later();*/

//we can re-write our obj to use flat arrow syntax

let obj3={
    name:"thbs",
    say:function(){
        console.log(this); // `this` points to object obj3
        setTimeout(()=> {
            console.log(this);
            let myname='Bangalore';
            console.log('below this is inside setTimeout')
            console.log(`i am inside setTimeout fn ${this.name}`);
           
                }, 1000);
    }

};
obj3.say();
