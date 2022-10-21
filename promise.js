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

