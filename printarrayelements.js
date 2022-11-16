const getElements = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]+ ",")
        for (let j = i+1; j < arr.length; j++) {
            let k = i
            // console.log(arr[i]);
            process.stdout.write(String(arr[i]))
            while(k < j){
                // console.log(arr[k+1]);
                process.stdout.write(" "+String(arr[k+1] + " "))
                k++;
            }
            console.log(",")
        }   
        
    }
}

const arr = [10,20,30,40,50,60,70]

getElements(arr)
