//empty object inside js
let persondetails={};
console.log(persondetails);

//initializing key-value in object
persondetails={
    'fname':'Sai',
    'lname':'Joshi',
    'age':30
};
console.log(persondetails);
//to access the value inside object
console.log(persondetails.age);  //using dot operator
console.log(persondetails['age']); //using brackets

//updating value inside object
persondetails.age=25;
console.log(persondetails);

//Nesting object
persondetails={
    'fname':'Sai',
    'lname':'Joshi',
    'age':30,
    address:{
        presentAddr:{
            'location':'Bangalore',
            'pincode':501
        },
        permanentAddr:{
            'location':'Pune'
        }
    }
};
//accessing nesting object value
console.log(persondetails.address.presentAddr);
//updating the nested object value
persondetails.address.presentAddr.pincode=500;
console.log(persondetails.address.presentAddr.pincode);


//adding new key
persondetails.address.permanentAddr['pincode']=200;
console.log(persondetails.address.permanentAddr);




