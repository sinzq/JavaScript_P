console.log("Topic -  Foreach" )

const arr = ["shivam", "satyam", "sundram"]

console.log(arr)

arr.forEach

arr.forEach((val) => console.log(val + " singh"))

arr.map((val) => console.log(val))

const num = [1, 2, 3, 4, 5, 6]

num.forEach((val) => console.log(val * 2))  // not return 

function d(n){
    return n * 2
}
let a = num.map(d)                         // return array

console.log(a)

let ans = num.find(Number => Number == 2 * 2)

console.log(ans)

let as = num.findIndex(Number => Number == 2 * 2)

console.log(as)

let ne = num.includes(3)

console.log(ne)

let fi = num.filter((num) => num % 2 == 0)

console.log(fi)

let sli = num.slice(1, 4+1)

console.log(sli)

let spli = num.splice(1, 2)

console.log(spli)

console.log(num)
