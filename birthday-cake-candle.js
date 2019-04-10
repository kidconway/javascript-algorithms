// Input: Array
// Output: Integer

function candleBitch(arr){
  let tot = 0
  let height = 0
  for (let i = 0;i < arr.length;i++){
    if (arr[i] > height){
      height = arr[i]
    }
  }
  for (let j = 0; j < arr.length;j++){
    if (arr[j] === height) {tot += 1}
  }
  return tot, console.log(tot)
}

let arr = [4, 4, 1, 3, 7, 7, 7]

candleBitch(arr)


// Actual Solution:
//
// function candleBitch1(n, arr){
//   var max = Math.max(...arr);
//     var result = arr.filter(c => c === max);
//     return console.log(result.length);
// }


// candleBitch1(7, arr)
