let score = "null"
console.log(typeof score)
let number = Number(score)
console.log(typeof number)
console.log(number)

// "33" gets easily converted into 33 string to number
//"33abc" => NaN
//true=> 1; false => 0

let isLoggedIn = "";

let booleanIsLoggedin = Boolean(isLoggedIn)
console.log(booleanIsLoggedin)
//1 => true ; 0=>false
//"" => false
// "abhi"=>true
let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber)

// ************************ Operations *********************************

let value = 3;
let Negval = -value
console.log(Negval)
let str1 = "hello"
let str2 = "world"
let str3 = str1+str2
console.log(str3)
console.log("1"+2)
console.log(1+"2")
console.log("1"+2+2)
console.log(1+2+"3")
console.log(+true)
console.log(+"")

let num1,num2,num3
num1=num2=num3 = 2+2
console.log(num2);

let Gamecounter = 100;
Gamecounter++;
console.log(Gamecounter)


++Gamecounter;
console.log(Gamecounter)