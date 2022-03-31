class personinfo{
    fname;
   lname;
  constructor(fname,lname){
      this.fname=fname;
      this.lname=lname;
     
      console.log(fname,lname);
  }
 
  who(){
      return `Hi I am ${this.fname}  ${this.lname}`;
  }
}

class student extends personinfo{
    course;
    constructor(fname,lname,course){
        super(fname,lname);
        this.course=course;

    }
    who(){
        return `${super.who()} and I'm studying ${this.course}`;
    }
    coursedetails(){
        return `${this.course} Computer science`;
    }
    }

let data1=new student('Arya','K','Engineering');
console.log(data1.who());   //hi i am Arya k and I'm studing Engineering
console.log(data1.coursedetails());  //Engineering computer science
