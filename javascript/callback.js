function addnum(arg)
    {
        console.log('I am in addnum');
        let mymsg=arg();
        console.log(mymsg);
        return 10+5;
    }
function sayhello()
    {
        return 'Hello i m call back function';
    }
addnum(sayhello);

 //example2
/*function greeting(name) {
    alert('Hello ' + name);
  }
  
  function processUserInput(callback) {
    var name = prompt('Please enter your name.');
    callback(name);
  }
  
  processUserInput(greeting);*/