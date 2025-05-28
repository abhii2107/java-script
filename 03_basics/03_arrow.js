const user  = {
    username : "Abhishek",
    price:999,
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this)   
    }

}
// user.welcomeMessage()
// user.username = "johan"
// user.welcomeMessage()
console.log(this)

function easy (){
    console.log(this);
    console.log(this.username) // this can't be used in finction it only works in objects
    
}
easy()