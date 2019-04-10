function plusMinus(arr) {
    var pos = 0
    var neg = 0
    var zero = 0
    var length = arr.length
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > 0) {
            pos = pos + 1
        } else if (arr[i] < 0) {
            neg = neg + 1
        } else {
            zero = zero + 1
        }
        console.log('iteration ' + i + ':', 'Positive :', pos)
        console.log('iteration ' + i + ':', 'Negative :', neg)
        console.log('iteration ' + i + ':', 'Zero :', zero)
        console.log('-------Break--------')


    }
    pos = pos / length
    neg = neg / length
    zero = zero / length
    console.log(length)
    results = [
        Math.floor(pos* 1000000) / 1000000,
        Math.floor(neg* 1000000) / 1000000,
        Math.floor(zero* 1000000) / 1000000
    ]

    return console.log('Results', results)
}
arr = [4, 5, -1, -34, 0, 0 ,0 ,0, 0 , 0, 0]

plusMinus(arr)



// Compact Solution ------->>
//
// function plusMinus(arr) {
//     let pos = 0, neg = 0 , zero = 0 , length = arr.length
//     arr.forEach( n => {
//         if( n > 0 )
//             pos++
//         else if( n < 0 )
//             neg++
//         else
//             zero++
//     } )
//     console.log( (pos / length).toFixed(6) )
//     console.log( (neg / length).toFixed(6) )
//     console.log( (zero / length).toFixed(6) )
// }


// Details:
//
// Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros. Print the decimal value of each fraction on a new line.
//
// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.
//
// For example, given the array  there are  elements, two positive, two negative and one zero. Their ratios would be ,  and . It should be printed as
//
// 0.400000
// 0.400000
// 0.200000
// Function Description
//
// Complete the plusMinus function in the editor below. It should print out the ratio of positive, negative and zero items in the array, each on a separate line rounded to six decimals.
//
// plusMinus has the following parameter(s):
//
// arr: an array of integers
// Input Format
//
// The first line contains an integer, , denoting the size of the array.
// The second line contains  space-separated integers describing an array of numbers .
//
// Constraints
//
//
//
// Output Format
//
// You must print the following  lines:
//
// A decimal representing of the fraction of positive numbers in the array compared to its size.
// A decimal representing of the fraction of negative numbers in the array compared to its size.
// A decimal representing of the fraction of zeros in the array compared to its size.
