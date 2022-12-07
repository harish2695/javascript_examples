// 'use strict'
//This file is for only testing


const arr = new Array(10);
const arr2 = new Array("10");

console.log(arr.length, arr2.length);

let x=10;

{
const x=30;
}

function value(){
  this.this= this;
  var x=5
  return x
}

console.log(x)
console.log(value())


//####### An example of Bitwise operator
const a = 5;
const b = 3;

console.log("a|b",a|b + 9)
console.log("####",a|b + b|a); //=====> 5|3+3|5 ====> 5|6|5
console.log("@@@",a&b + b&a) // (101)(110)(101) ===> 100 ====> 4

//#########
const arr1 = Array(20);
const arr3 = Array(20,10);
console.log(arr1.length, arr3.length);

const func1 = function () {
  this.this = this;
  this.b = 1;
};

const obj = new func1();

console.log(obj.b, obj.this.b);

const sortFunc = (x,y) => {
    if(x<y) {
        return -1
    }
    if(x>y){
        return 1
    }
    return 0
}
//######### HOW DOES SORT WORKS########
const numbers = [33,2,8]
numbers.sort(sortFunc)
console.log(numbers)

//######### How the class objects will behave #############
class A {
  static b = 1;
  c = 2;
  constructor() {
    this.b = 3;
    this.c = 4;
  }
}

const B = new A();

console.log(A.b, A.c, B.b, B.c);


//#######################
console.log(1 < 2 < 3) 
console.log(3 > 2 > 1) 

//################
const person = {
  name: "Harish",
  age: 27,
  skills: {
    language: "JavaScript"
  }
}

Object.freeze(person);

person.name = "Kadsuru";
person.skills.language = "Typescript"
// Throws an error in strict mode
  
console.log(person.name);
console.log(person.skills.language)


//######## Unshift method in javascript ######

const array = [1,2,3]

const poppedValue = array.pop()
console.log(array,poppedValue)

const result = array.unshift(poppedValue)

console.log("result",result)
console.log("arr",array)

//######  Difference b/w 'in and of' in for loop

const players = ["JC","VK","HP","DK","HR"]

for(player in players){
  console.log(player)
}
for(player of players){
  console.log(player)
}

//#################

const obj1 = {
  name: "ss",
  getName() {
    console.log(this.name);
  }
};
var name = "ssg";
const getName = obj1.getName;
getName();