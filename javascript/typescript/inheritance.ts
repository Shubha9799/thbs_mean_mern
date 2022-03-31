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
    location;
    constructor(fname,lname,course,location){
        super(fname,lname);
        this.course=course;
        this.location=location;

    }
    who(){
        return `${super.who()} and I'm studying ${this.course}`;
    }
    coursedetails(){
        return `In the stream of Computer science at ${this.location}`;
    }
    }

let data1=new student('Arya','K','Engineering','Bangalore');
console.log(data1.who());   
console.log(data1.coursedetails());  
