const p1 = new Promise((res,rej) => {
    setTimeout(() => rej("one"),1000);
})

const p2 = new Promise((res,rej) => {
    setTimeout(() => res("two"),2000);
})

const p3 = new Promise((res,rej) => {
    setTimeout(() => res("three"),3000);
})


Promise.any([p1,p2,p3])
.then((result) => console.log("any "+result))
.catch(err => console.log("any "+err))


Promise.all([p1,p2,p3])
.then((result) => console.log("all "+result))
.catch(err => console.log("all "+err))

Promise.race([p1,p2,p3])
.then((result) => console.log("race "+result))
.catch(err => console.log("race "+err))