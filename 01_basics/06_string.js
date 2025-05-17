const name  = "abhishek"
const RepoCount = 50
//console.log(name+RepoCount+"value")
console.log(`hello my name is ${name} and my repocount is${RepoCount}`)

const GameName = new String('abhii-21 ')
console.log(GameName.length) 
console.log(GameName.__proto__)
console.log(GameName.toUpperCase())
console.log(GameName.charAt(5))
console.log(GameName.indexOf('i'))
const NewString = GameName.substring(0,4)
console.log(NewString)


const anotherstring = GameName.slice(-2,5)
console.log(anotherstring)


const newStringOne = "    abhi    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://abhishek.com/abhishek%20bhatia"
console.log(url.replace('%20','-'))

console.log(url.includes('abhishek'))

console.log(GameName.split('-'))