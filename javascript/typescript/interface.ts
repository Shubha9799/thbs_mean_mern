interface demo{
    batch:string;
    subject:string;
    getbatch? :Function; //optional property
    //list:Array<Number>;
    isPresent? :Function;
}
class Person1 implements demo{
    batch='99';
    subject='Mean/mern';
    //list=['API', 'Devops','Mean/mern'];
    constructor(){}
    isPresent(count){

    }
}