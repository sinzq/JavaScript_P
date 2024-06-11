console.log("DataTypes")

// Number, Strings, Boolean, Null, Undefined, Objects


// Numbers--------------------------------------------

let num = 3
let num1 = 10.3

console.log(typeof 1)
console.log(typeof num)
console.log(num + num1)


// Strings-------------------------------------------

const firstName = "Shivam"
const lastName = 'Singh'

console.log(firstName)
console.log(firstName + ' ' + lastName)
console.log(`this is strings ${firstName} and the second string is ${lastName}`)
console.log('1' + 1)     // output as a string. 
console.log('1' * 1)     // output as a number.  
console.log('a' * 1)     // output as a NaN(Not a Number).   



// Booleans 1(true) | 0(false)----------------------

let isLoggedin = false
console.log(isLoggedin)

if (1){
    console.log("hello from true ")
}


//Null-----------------------------------------------

let isLoggedDate = null
console.log(isLoggedin)


// Undefined------------------------------------------

let temp = undefined
console.log(temp)
console.log(typeof temp)


// Objects

const person = {
    firstName : "Shivam",
    lastName : "Singh",
    age : 22,
    isLoggedin : false
}
console.log(person.firstName)
console.log(person.age)


// Operator

let a = 1
let b = 2
console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)

