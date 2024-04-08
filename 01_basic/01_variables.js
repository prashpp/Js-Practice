const accountId = 144553
let accountEmail = "pashant@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur"

// const accountId = 2; we can change const value of const

console.log(accountId)

accountEmail = "prash@gmail.com"
accountPassword = "7897897"
accountCity = "Indore"


/*
    Prefer not to use var 
    because of issue in block scope and functional
*/


console.table([accountId, accountEmail, accountPassword, accountCity])