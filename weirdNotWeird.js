function weirdNotWeird(n){
  if (n % 2 == 1){
    console.log('Weird')
  } else if ( n < 5 || n > 21 ) {
    console.log('Not Weird')
  } else {
    console.log('Weird')
  }
}

console.log('Test Case 8')
weirdNotWeird(8)

// More efficient:
// function main() {
//   var N = parseInt(readLine());
//   if ( N%2 == 1 || (N > 5 && N < 21)) {
//     console.log("Weird");
//   } else {
//     console.log("Not Weird");
//   }
// }
