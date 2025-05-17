// datatypes are further divided into two parts ont he basis of how it is stored and how itcan be accesed
// primitive and nopn primitive
// primitive 7: string,number, boolean, undefied, null,symbol , bigint
// non primitive (reference type)
// array , objects , function 
const heros = ["shaktiman","ironman","daredevil"]

// objrct 
{
    name  : "abhsihek"
    age: 212

}
//function
const myFunction = function(){
    console.log(" hello world")
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// stack(primitive) and heap(non primitive)
let myName = "abhishek"
let anotherName = myName
 anotherName = "sutta"
console.log(myName)
console.log(anotherName)
let userOne = {
    email: "user@google.com"
    
} 
let usertwo = userOne
usertwo.email = "abhishek@google.com"
console.log(userOne.email)
console.log(usertwo.email)
 
