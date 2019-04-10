let x = [
  [1, 1, 1, 0, 0 ,0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [9, 9, 9 ,6 ,1 ,8],
  [0, 9, 0 ,0 ,5 ,0],
  [9, 9, 9 ,7 ,1 ,1]
]

// Method 1

// function hourglassSum(arr) {
//     let max = -63;
//
//     for (let i = 0; i < 4; i++) {
//         for (let j = 0; j < 4; j++) {
//             let sum = arr[i + 1][j + 1];
//             for (let k = 0; k < 3; k++) {
//                 sum += arr[i][j + k];
//                 sum += arr[i + 2][j + k]
//             }
//             if (sum > max) max = sum;
//         }
//     }
//
//     return max;
// }


// Method 2

// function hourglassSum(arr) {
//   let shift_count = 4;
//   let hourglass_2d_arr = [];
//   let final_result;
//   let sums_of_all_arrays = [];
//
//   for (let i = 0; i < shift_count; i++) {
//     for (let j = 0; j < shift_count; j++) {
//       let hg = [
//         arr[i][j], arr[i][j+1], arr[i][j+2],
//         arr[i+1][j+1],
//         arr[i+2][j], arr[i+2][j+1], arr[i+2][j+2]
//       ];
//       hourglass_2d_arr.push(hg);
//     }
//   }
//
//   hourglass_2d_arr.forEach(arr => {
//     let arr_sum = arr.reduce((total, currentValue) => total + currentValue, 0);
//     sums_of_all_arrays.push(arr_sum);
//   });
//   final_result = sums_of_all_arrays.sort((a, b) => b - a);
//
//   return final_result[0];
// }


// Correct Method

function hourglassSum(arr) {
    let res = [];
    for (let y = 0; y <= 3; y++) {
      for (let x = 0; x <= 3; x++) {
        res.push(arr[y].slice(x, x + 3).reduce((c, v) => c + v,0) +
         arr[y + 1][x + 1] +
         arr[y+2].slice(x, x + 3).reduce((c, v) => c + v,0));
      }
    }
    return Math.max(...res);
}

console.log(hourglassSum(x))
