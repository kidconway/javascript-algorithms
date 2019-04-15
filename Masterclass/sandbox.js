console.log('Sandbox | Whiteboard');




// Functions

const multiply = (x, y) => x * y
const addItUp = (n) => n * (n + 1) / 2
const multiplyByTwo = (x) => x * 2
const multiplyByThree = (x) => x * 3
const doubleArray = (x) => {
  let resultArr = []
  x.forEach((item) => { resultArr.push(item * 2) })
  return resultArr
}
const characterCount = (str) => {
  let obj = {}
  for (let char of str){
    char = char.toLowerCase(str)
    if (!obj[char]) {
      obj[char] = 1
    } else {
      obj[char]++
    }
  }
  return obj
}









// Declarations
let arr = [1, 2, 3, 4, 5]
let newArr = []
let str = 'I order the club sandwich all the time. And I\'m not even a member, man. I don\'t know how I get away with it.'

console.log('\n')
console.log(addItUp(10));

console.log('\n')
arr.forEach((x) => {newArr.push(x * 45)})
console.log(arr)
console.log(newArr)

console.log('\n')
console.log(multiplyByTwo(10))
console.log(multiplyByThree(10))

console.log('\n')
console.log(doubleArray([1,2,3]))

console.log('\n')
console.log(characterCount(str))

console.log('\n \n My favorite quote:')
console.log('"George Bush doesn\'t care about black people." \n - Pyschotic Legend Kanye West\n')
