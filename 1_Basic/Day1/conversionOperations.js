let score = undefined

//console.log(typeof score)  // two ways to use it with and without brackets
//console.log(typeof(score))

score = Number(score)

//console.log(score)
//console.log(typeof score)

/**
 *  "33" => 33
 *  "33abc" = > NaN (Not a number ) it is also a type of number 
 *  true => 1 ; false => 0
 *  null  =>  typeOf is object after conversion it can be converted to number
 *  undefined => typeOf is also undefined but its value is NaN and can be converted to number
 */

let isLoggedin = ""
let booleanIsLoggedIn = Boolean(isLoggedin);

//console.log(booleanIsLoggedIn)

/**
 * 1=> true ; 0=>  false
 * "gaurav " => true
 * 45645 = > true
 * "" => false
 */

let num = 33
let alphabet = String(num)
console.log(alphabet);
console.log(typeof alphabet);

