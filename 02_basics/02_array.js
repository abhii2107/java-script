 const marvel_heroes = ["thor","daredevil","loki"]
 const dc_heroes  = ["batman","superman","wonder woman"]
 marvel_heroes.push(dc_heroes)

//  console.log(marvel_heroes)
//  console.log(marvel_heroes[3][1])

//  const AllHero   = marvel_heroes.concat(dc_heroes)
// console.log(AllHero)

// const all_new_heroes = [...marvel_heroes,...dc_heroes] // most of the people prefer this method instead of concate
// console.log(all_new_heroes)


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)


console.log(Array.isArray("abhishek"))
console.log(Array.from("abhishek")) 

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)) // also use for conveerting into an array