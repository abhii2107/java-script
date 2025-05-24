// singleton 
// when we made an object by a constructor alwas a singleton object is formed



// object literals

const mySum = Symbol("key1")

const User = {
    name: "Abhishek",
    "full name":"Abhishek bhatia",
// to use it as symbol
   [ mySum]: "mykey1",
    age: 18,
    location : "jaipur",
    email: "abhi@gmail.com",
    isLoggedin: false,
    LastLogginDays: ["monday", "saturday"]
}

console.log(User.email)
console.log(User["email"])
console.log(User["full name"])
console.log(typeof User[mySum])


User.email = "bhatiaabhishek776@gmail.com"
//if we want ki koi bhi object ki value ko change nan kar sake we will use freeze
//Object.freeze(User)
User.email = "hydrarecker@gmail.com"
console.log(User)

User.greeting = function(){
    console.log("hello daer user")
}

console.log(User.greeting())


User.greeting2 = function(){
    console.log(`hello daer user,${this.name}`)
}
console.log(User.greeting())
console.log(User.greeting2())
