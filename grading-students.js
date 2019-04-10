// ES6:
// const gradingStudents = () => { return }
const round = (x) => { return Math.ceil( x / 5 ) * 5 }
function gradingStudents(grade){
  for (let i = 0; i < grade.length;i++){
    if (round(grade[i]) - grade[i] < 3 && grade[i] > 38){
      grade[i] = round(grade[i])
    }
  }
  return console.log(grade)
}

let data = [68, 30, 52, 90, 94]

gradingStudents(data)
