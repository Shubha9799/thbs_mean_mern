var person = /** @class */ (function () {
    function person(fname, lname, address) {
        this.fname = fname;
        this.lname = lname;
        this.address = address;
        console.log(fname, lname);
    }
    person.prototype.who = function () {
        return "Hi I am ".concat(this.fname, " from ").concat(this.address);
    };
    return person;
}());
var data = new person('Riya', 'Sharma', 'Pune');
console.log(data.who());
