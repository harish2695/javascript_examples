console.log(1)

async function fetchData(){
    console.log(2);
    let result =  await Promise.resolve(3)
    console.log(result)
    console.log(5)
}

fetchData()
console.log(4)


getNameArrow(); // Uncaught TypeError: getNameArrow is not a function ( getNameArrow is undefined here )
var getNameArrow = () => {
  console.log("Jayesh");
};