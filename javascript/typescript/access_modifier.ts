class Person { //(1)

    public firstName ; //(2)

     private lastName;



 constructor(firstName, lastName) {

     this.firstName = firstName;

       this.lastName = lastName;
 }

    getName() {

        console.log(this.firstName + "    " + this.lastName);

    }

}

let p1 = new Person('ss', 'cc');
console.log(p1.getName());