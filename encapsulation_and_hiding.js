function counter(){
var count = 0 
return function incrementCount(){
    count++;
    console.log(count)
}
}

var counter1 = counter()
counter1()
counter1()
// console.log(count)

var counter2 = counter()
counter2()
counter2()




//contructor function
function CounterA(){
    var count = 0 
        this.incrementCounter =  function (){
            count++;
            console.log(count)
        }
        this.decrementCounter = function () {
            count--;
            console.log(count)
        }
}

var counter3 = new CounterA()
counter3.incrementCounter()
counter3.incrementCounter()
counter3.decrementCounter()

//relation b/w garbage collection and closure
function a(){
    var x= 0;
    return function b(){
        console.log(x)
    }
}

var y = a()
y()