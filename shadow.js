let value = 4000;

{
    let value = 300
    console.log(value)
}
b();
function b(){
    console.log(value)
    let value = 200;
    console.log(value)
}

console.log(value)

