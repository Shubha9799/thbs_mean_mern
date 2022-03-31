class person{
      fname;
     lname;
    address;
    constructor(fname,lname,address){
        this.fname=fname;
        this.lname=lname;
        this.address=address;
        console.log(fname,lname);
    }
   
    who(){
        return `Hi I am ${this.fname} from ${this.address}`;
    }
}
let data=new person('Riya','Sharma','Pune');

console.log(data.who());

