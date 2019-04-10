class Person {
  constructor(initialAge){
    this.age = initialAge
    if (initialAge < 0) {
      console.log("You are not born yet, therefore not a person")
      this.age = 0
    }
  }
  amIOld(){
    if (this.age < 13) {
      console.log("You are young.")
    } else((this.age >= 13 && this.age < 18) ? console.log("You are a teenager.") : console.log("You are old."))
    return this
  }
  yearPasses(){
    this.age++
    return this
  }
}
let Colby = new Person(17)
console.log(`I am Colby and I am ${Colby.age} years old`)
Colby.amIOld()
console.log('~~~~~~~~~~~~~~~~')
console.log('~~~~~~~~~~~~~~~~')
console.log('Time Passes')
console.log('~~~~~~~~~~~~~~~~')
console.log('~~~~~~~~~~~~~~~~')
Colby.yearPasses().yearPasses().yearPasses().yearPasses().yearPasses().yearPasses().yearPasses().yearPasses().yearPasses().yearPasses().yearPasses().yearPasses().yearPasses().yearPasses().yearPasses().yearPasses().yearPasses().yearPasses().yearPasses()
console.log(`I am Colby and I am ${Colby.age} years old`)
Colby.amIOld()


// function Person(initialAge) {
//   var age = initialAge
//   if (age < 0) {
//     console.log("Age is not valid, setting age to 0.")
//     age = 0
//   }
//
//   this.amIOld = function() {
//     if (age < 13) {
//       console.log("You are young.")
//     } else((age >= 13 && age < 18) ? console.log("You are a teenager.") : console.log("You are old."))
//   return this
//   }
//   this.yearPasses = function() {
//     age++
//     return this
//   }
// }
