function outest(){
    function outer(){
        function inner() {
        }
        return inner
    }
    const A = 200
    return outer
    
}
const A = 10

outest()()();

//
function foo1() {
  return {
    bar: "hello",
  };
}
function foo2() {
  return 
  {
    bar: "hello"
 };
}

console.log(foo1())
console.log(foo2())