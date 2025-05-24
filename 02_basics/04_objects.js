// how to declare objects using constructor (singleton object)

//const tinderUser = new Object() // singleton object
const tinderUser = {} // non singleton object
tinderUser.id = "12233 abc"
tinderUser.name = "johan"
tinderUser.isLoggedin = false

//console.log(tinderUser);
const regularUser = {
    email: "johan@gmail.com",
    fullName: {
        userfullname : {
            firstname: "johan",
            lastname: "leibert"
        }
        
    }
}
//console.log(regularUser.fullName.userfullname.firstname)

// merging of the objexts
const obj1 = {1: "a",2: "b"}
const obj2 = {1: "a" , 4: "b"}

//const obj3 = {obj1,obj2}
// const obj3  = Object.assign({},obj1,obj2)// {}=> target
// console.log(obj3)

const obj3 = {...obj1, ...obj2}

const users = [
    {

    },

    {

    }, 
 
]
users[1].email
console.log(tinderUser)
console.log(Object.keys(tinderUser))

const course = {
    coursename: " Hotel Management",
    price: "999",
    collegeName : "Reyansh college of H.M"

} 
const {collegeName:college} = course 
console.log(college)
