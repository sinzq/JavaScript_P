console.log("conditional statements if or else | ye nahi tho ye")


// if else ladder-----------------------------------
const age = 18

if (age >= 18){
    console.log("Yes, You can Vote")
}
else if(age >= 100){
    console.log("No, You are to late")
}
else{
    console.log("No, you can't vote")
}



// Ternary operator---------------------------------
age >= 18 ? console.log("Yes") : console.log("No")

let result = age >= 18 ? "Yes" : "No"
console.log(result)


// Switch case -------------------------------------
const opt = 7

switch(opt){
    case 1 :{console.log("first")} break
    case 2 :{console.log("second")} break
    case 3 :{console.log("third")} break
    default :{console.log("Invalid option")} break
}


// Switch statements ------------------------------
const a = 30
const option = "*"
const b = 40

switch (option) {
    case "+" : console.log(a + b)
        break
    case "-" : console.log(a - b)
        break
    case "*" : console.log(a * b)
        break

    default: console.log("IDK")
        break
}