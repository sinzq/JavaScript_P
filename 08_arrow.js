console.log("Topic - Arrow function => ")

// syntax
function h(){
    console.log("say hello !")
}

h()

let ha = () => {
    console.log("say hello !!")
}

ha()

let add = (a, b)=>{
    return a*b 
}

console.log(add(10, 5))

let mul =(a, b) => a * b
console.log(mul(10, 2))


// Arguments  function is not possible in => arrow function
function addnumber(...nu) {
    console.log(nu)
}

addnumber(10, 20)

// This keyword 
const obj = {
    value: 20,
    myFunction : function (){
        console.log("value is " + this.value)
    }
}


obj.myFunction()
