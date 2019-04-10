var matrix = [[2, 3, 4], [5, 3, -1], [9, 8, -2]]

function diagonal(matrix){
  let res = []
  let diag1 = 0
  let diag2 = 0
  for (let i = 0; i < matrix.length;i++){
    for(let j = 0;j < matrix.length;j++){
      if(i === j){
        diag1 += matrix[i][j]
      }
      if (i + j === matrix.length - 1){
        diag2 += matrix[i][j]
      }
    }
  }
  res = [diag1, diag2]
  let dif = Math.abs(diag1 - diag2)
  return dif, console.log('The absolute difference is ' + dif), console.log('The first diagonal is ' + res[0]), console.log('The second diagonal is ' + res[1])
}

diagonal(matrix)



// One loop solution
//
// function diagonalDifference(a) {
//         let row = 0;
//         let column = a[0].length - 1;
//         let solution = 0;
//         for (let index = 0; index < a.length; index++) {
//             solution -= a[row][row] - a[row++][column--];
//         }
//         return Math.abs(solution);
// }


// Given a square matrix, calculate the absolute difference between the sums of its diagonals.
//
// For example, the square matrix  is shown below:
//
// 1 2 3
// 4 5 6
// 9 8 9
// The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .
//
// Function description
//
// Complete the  function in the editor below. It must return an integer representing the absolute diagonal difference.
//
// diagonalDifference takes the following parameter:
//
// arr: an array of integers .
// Input Format
//
// The first line contains a single integer, , the number of rows and columns in the matrix .
// Each of the next  lines describes a row, , and consists of  space-separated integers .
//
// Constraints
//
// Output Format
//
// Print the absolute difference between the sums of the matrix's two diagonals as a single integer.
//
// Sample Input
//
// 3
// 11 2 4
// 4 5 6
// 10 8 -12
// Sample Output
//
// 15
// Explanation
//
// The primary diagonal is:
//
// 11
//    5
//      -12
// Sum across the primary diagonal: 11 + 5 - 12 = 4
//
// The secondary diagonal is:
//
//      4
//    5
// 10
// Sum across the secondary diagonal: 4 + 5 + 10 = 19
// Difference: |4 - 19| = 15
//
// Note: |x| is the absolute value of x
