// dates

let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)

//let myCreatedDate = new Date(2025,0,23)
let myCreatedDate = new Date(2025,0,23,5,3)
console.log(myCreatedDate.toDateString())
console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(Math.floor(Date.now()/1000)) //to get time in seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate())
console.log(newDate.getDay())
console.log(newDate.getMonth()+1)
//`${newDate.getDay()}`


newDate.toLocaleString('default',{
    weekday:"long",
     
})
