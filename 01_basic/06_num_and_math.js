const score = 400;
// console.log(score)

const newScore = new Number(100)
// console.log(newScore);

// console.log(newScore.toString())
// console.log(newScore.toString().length)
// console.log(newScore.toFixed(2))

// const otherNumber = 23.688
// console.log(otherNumber.toPrecision(4))

// const hundreds = 100000
// console.log(hundreds.toLocaleString("en-IN"))



/***************Maths**************/
// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(4.1))
// console.log(Math.ceil(4.6))
// console.log(Math.floor(4.5))
// console.log(Math.min(1,6,8,0,3))
// console.log(Math.max(1,6,8,0,3))

console.log(Math.random()) // it always give ramdom values between 0, 1.
console.log((Math.random()*10) + 1 ) // it always give ramdom values between 1, 10.
console.log(Math.floor(Math.random()*10) + 1 )
 
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min))