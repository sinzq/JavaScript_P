const ele = document.querySelectorAll(".block")

    ele.forEach((e) => {
    console.log(e.innerText)
})


console.log("query selector")

const body = document.querySelector("body")

console.log(body)






// body.innerHTML = "<h1> Hacked !</h1>"

console.log(body.innerHTML)




const div = document.querySelector("div")

div.innerHTML = "<h1> Hacked !</h1>"




const username = document.querySelector("#username")

username.innerText = "Piyush :)"



const elem = document.querySelector(".block")

elem.innerText = "Piyush :)"

console.log(elem.innerText)

