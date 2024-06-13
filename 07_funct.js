console.log("topic - function")

function sayHello() {
    console.log("Hey Shivam")
}

sayHello()


// Arrguments   
function add(a, b){
    console.log(a + b)
}

add(5, 8) // Parameters 




// Example or practice
function multiple(a, b){
    return a * b
}

let h = multiple(2, 4)
console.log(h)



function sub(a, b){
    let ans = a - b
    return ans 
}

let s = sub(3, 2)
console.log(s)



// Example 
function addNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

const numbersToAdd = [1,2,7,8,9,10,1];
console.log(addNumbers(numbersToAdd));



// By Piyush
function addnum(){
    let ans = 0
    for(let i=0; i< arguments.length; i++){
        ans = ans + arguments[i]
    }
    return ans
}

let result = addnum(10,10)
console.log(result)




function addnum1(...stor){  // Spread Operator 
    let ans = 0
    for(let i=0; i< stor.length; i++){
        ans = ans + stor[i]
    }
    return ans
}

let res = addnum1(10,10)
console.log(res)

// hositing 

addnumber(10, 20)

function addnumber(...nu) {
    console.log(nu)
}



