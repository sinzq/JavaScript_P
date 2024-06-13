console.log("Higher order callback function")

function add(a, b, cb) {
    let result = a + b
    cb(result) 
}

add(2, 10, (val) => console.log(val) )

