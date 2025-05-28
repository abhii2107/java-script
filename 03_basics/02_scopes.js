var c =300
let a = 300
if(true){

    let a = 10
    const b = 20
    var c = 30
   // console.log("INNER:",a)
    
}


// console.log(a)
// console.log(b)
// console.log(c)// var will print outside of the scope
function one(){
    const username = "abhishek"

    function two(){
        const website = "youtube"
        console.log(username)  
    }
    //console.log(website);
    two()
    
}
//one()
if(true){
    const username= "abhishek"
    if(username == "abhishek"){
        const website =  " youtube"
        //console.log(username+website);
        
    }
}

//++++++++++++++++++++++++++INTRESTING++++++++++++++++++++++++++++++
console.log(addone(5));// this will show no error

function addone (num){
    return num + 1
}

console.log(addtwo(5)); // this will show error

const addtwo = function(num){
    return num +2
}
