function outer(){
    function inner(){
        console.log(a)
    }
    var a = 10;
    return inner
}
outer()();


/*(Closures, Function along with it's lexical scope bundled together to form a closure.
In simple words, Each and every function in javascript has access to its outer function's scope. 
Inner function can access all the variables and functions of it's outer function 
 even after the execution context of outer function has been completely removed from the call stack.  */




// 💡Advantages of Closures

// 1) Data hiding, Encapsulation, variables can not be access or modified directly from outside the functions 👇
function Person() {
    var name = "Jay";
  
    this.getName = () => {
      return name;
    };
  
    this.setName = () => {
      name = "Jc";
    };
  }
  
  const jayesh = new Person();
  // console.log(name); // name is not defined
  console.log(jayesh.getName()); // Jay
  jayesh.setName();
  console.log(jayesh.getName()); // Jc
  
  // 💡Disadvantages of Closures
  
  // 👉 Overconsumption of memory.
  // 👉 Variables are not Garbage collected.
  // 👉 Memory leaks.
  