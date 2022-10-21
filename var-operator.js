

var value =4000
{
  var value = 300
}
b();
function b() {
    console.log(value)
    var value = 200
    console.log(value)
}

console.log("value",value)

let a= 10
var c = 20


function isValidSubsequence(array, sequence) {
    // Write your code here.
    let result = []
    for(let value of array){
      if(sequence.includes(value)){
        // result.push(value)
        sequence.shift()
      }
    }   
    
    // if(result.length === sequence.length){
    //     for (let i = 0; i < result.length; i++) {
    //         if(result[i] !== sequence[i]){
    //             return false
    //         }
            
    //     }
    //     return true
    // }
    // return false;
    return !sequence.length;
  }

  const array = [5,1,22,25,6,-1,8,10]
  const sequence = [1,6,-1,10]

  function isValidSubsequence1(array, sequence) {

    for (let i = array.length-1; i >=0; i--) {
        if(sequence[sequence.length - 1] === array[i]){
            sequence.pop()
        }
    }
    return !sequence.length
  }



  // console.log(isValidSubsequence(array,sequence))
  // console.log(isValidSubsequence1(array,sequence))