// console.log("start")

// const promise  = new Promise(resolve => {
//     console.log(1)
//     resolve(2)
//     console.log(3)
// })
// promise.then(result => {
//     console.log(result)
// })
// console.log("end")



for(var i = 0 ; i<5 ; i++){
    setTimeout(() => {
        console.log(i)
    },1000 * i)
}

// (() => {
//     for (var i = 0; i < 5; i++) {
//       setTimeout(() => {
//         console.log(i);
//       }, i * 1000);
//     }
//   })();


let p = new Promise((resolve,reject) => {
    reject(Error("Fails!!"))
})

p
.then(res => {
    console.log("response",res)
}).catch(err => {
    console.log(err.message);
})


const person = {
    name: "JC",
    displayName(){
        console.log(this.name)
    }
}

const jayesh = Object.create(person)

person.displayName()
jayesh.displayName()

// class a{
//     static min = []
//     eat() {a.min.push("food")}
// }

// let car = new a();
// a.eat()

// const a = {a:0,a:2}
// console.log(a.a)
