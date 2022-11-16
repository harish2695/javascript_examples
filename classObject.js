class Person {
    constructor (name,age){
        this.name = name;
        this.age = age;
    }

    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
}

const harish = new Person("HC",27);

console.log(harish.getName())
console.log(harish.getAge())