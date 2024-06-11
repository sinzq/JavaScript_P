console.log("Logical Operators")

// AND(&&)   OR(||)   NOT(!+)

// And &&  -- all condition must be true
const age = 20
const gender = "male"

if (age >= 18 && gender == "male"){
    console.log("You are adult male ")
}
else{
    console.log("you are not adult male")
}



// Or ||  -- atleast one condition must be true 
if (age >= 18 || gender == "female"){
    console.log("You are not perfect male")
}



// Not !=  -- true became false | false became true
const number = 4

if (number % 2 != 0){
    console.log("Even Number")
}
else {
    console.log("odd Number")
}

