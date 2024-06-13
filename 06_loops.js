console.log("Loops")

// Loops is used for repeatative task
// for while do-while


// for - if you know how many type time to loop
for(let i = 1; i<=10; i++){
    console.log("shivam singh " + i)
}


// while - loop executed when ever statement is true
let ip = 0
let house = 100

while (ip != house ) {
    ip = ip + 10;
    console.log("step taken " + ip)
}


// Do while -
do {
    ip = ip + 10;
    console.log(" taken " + ip)
} while (ip <= house);



// Game Guess the input 

let num = 20
let guess = 0

do{
    guess = parseInt(prompt("Guess the Number"))
    if (guess == num){
        alert("you are winner")
         break
    }
}while(guess != 0)