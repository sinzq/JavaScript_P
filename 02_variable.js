console.log("variables")

// variable is assign without hipen.
// variable not assign with special symbols.

// var - global accessable {} in code block 
// re-assigned 
// kahi bhi access krlo

var num1 = 1
var num2 = 2

console.log(num1 + num2)


//--------------------------------------------------------------------------
// let having local scope {} only access in code block.
// access sirf kud be code block k andr hoga
// let can re-assigned 

let first = "shivam"
let last = "singh"

console.table([first, last])

if (true) {
    let a = "Hello from if"
    console.log(a)
}



//--------------------------------------------------------------------------
// const having local scope {}. 
// access sirf kud be code block k andr hoga.
// const value can't re-assign update or change 

const age = 22

console.log(age + 10) 

 



