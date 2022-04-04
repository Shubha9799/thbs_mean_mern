const cars = {
    kiya: 'brown',
    rangerover: 'red',
    mgh: 'white',
};

const colors = Object.values(cars);
console.log('------objects values-----');
console.log(colors);


const keys = Object.keys(cars);
console.log('------Keys of object-----');
console.log(keys);

console.log("----frozen object---");

const frozenObject = {
    name: 'Ram'
    
}

Object.freeze(frozenObject);


frozenObject.name = 'Yugh';
frozenObject['age'] = '23';


console.log(frozenObject);

const firstObject = {
    firstName: 'Ram'
}

const secondObject = {
    lastName: 'Sharma'
}

const combinedObject = Object.assign(firstObject, secondObject);
console.log(combinedObject)

console.log("---seal---")
let obj = {
        
        value: 10
    };
    
    Object.seal(obj);
    
    obj.value = 20;
    console.log(obj.value);