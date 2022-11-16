const calc = (a) => {
    return (b) => {
        if(b) {
            return calc(a+b)
        }
        return a
    }
}

console.log(calc(1)(2)(3)(4)())