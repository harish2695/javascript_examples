const arr = [1,2,5,3,2,4]

const checkTwo = (num,i,arr) => {
    if(num === 2){
        return true
    }
    return false
}

const resp1 = arr.filter(checkTwo)

const resp2 = arr.find(checkTwo)
console.log(resp1)
console.log(resp2)
