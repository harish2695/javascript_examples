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

