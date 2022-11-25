let arr = ["ab","ac", "ad", "ae"]

delete arr[1]
arr[1] = 0
console.log("ARR",arr[1])
console.log(arr.length)

const getArgsLen = (a,b,c) => {

    return arguments.length;
    }
    
const b = getArgsLen(1,"",null);
console.log(b)