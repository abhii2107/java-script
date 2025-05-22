//array

const myArray = [0,1,2,3,4,5,true,"abhishek"]
console.log(myArray[7])
// javascript array copy operation creates shallow copies
// a shallopw copy of an object is a copy whose properties shares the same refernce
const Heroes = new Array("jignesh","durgesh")
console.log(Heroes)

//array methods
myArray.push(7)
console.log(myArray)
//pop = > last value will pop
myArray.pop()
console.log(myArray)

myArray.unshift(9)
console.log(myArray)
myArray.shift()
console.log(myArray)

console.log(myArray.includes(9))
console.log(myArray.indexOf(5))

const newArr = myArray.join()//adds all the elemnt of an array into a string
console.log(myArray)
console.log(newArr)

// slice , splice
console.log("A",myArray)
const mynewarr1  = myArray.slice(1,3)
console.log(mynewarr1)
console.log("B",myArray)

const mynewarr2  = myArray.splice(1,3)
console.log(mynewarr2)
console.log("C",myArray)

