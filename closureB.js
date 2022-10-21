function outest(){
    function outer(){
        function inner() {
            console.log("HHH",A)
        }
        return inner
    }
    const A = 200
    return outer
    
}
const A = 10

outest()()();
