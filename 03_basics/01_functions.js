

function sayMyName(){
console.log("a");
console.log("b");
console.log("h");
console.log("i");
console.log("s");
console.log("h");
console.log("e");
console.log("k");
}
//sayMyName() // functio9n execution
// function addTwoNumbers(number1,number2){
//     console.log(number1+number2)
// }
function addTwoNumbers(number1,number2){
    // let result = number1+number2
    // return result
    return number1+number2
    
}
 const result = addTwoNumbers(5,4)
 console.log("result:",result)
 function loginMessage(username){
    if(username==undefined){ //this can be written as if(!username)
        console.log("please enter a username");
        return
    }
    return `${username} just Logged in`

 }
//  console.log(loginMessage("abhishek"))
//console.log(loginMessage())

// shopping cart when user is adding the items
function calculateCartPrice(...num1){// by using ... we can wrap usp all the price in an array
    return num1
}
//console.log(calculateCartPrice(200,400,500))

const user ={
    username : "abhishek",
    price: 199
}

function handleObject(anyObject){
    console.log(`usernamew is ${anyObject.username} and price is ${anyObject.price}`)

}
handleObject(user)
const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[2]
}
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,400,100,600]))

