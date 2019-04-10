function miniMax(arr){
  let min = 0, max = 0
  for (let i = 0; i < arr.length - 1;i++){
    min += arr[i]
  }
  for (let j = 1;j < arr.length;j++){
    max += arr[j]
  }
  return min, max, console.log(min, max)
}

arr = [1, 3, 5, 7, 9]

miniMax(arr)



// Solution:
//
// function miniMax(arr){
//   const sum = arr.reduce((acc, next) => acc + next, 0);
//   console.log(sum - Math.max(...arr), sum - Math.min(...arr));
// }
