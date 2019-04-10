let x = [1,2,3,4]

// function reverseArray(a) {
//     let newArr = []
//     for (let i = a.length - 1;i >= 0;i--){
//         newArr.push(a[i])
//     }
//     return console.log(newArr)
// }



// const reverseArray = (a) => {
//     let newArr = []
//     let len = a.length -1
//     for(let i = len;i > -1;i--){
//         newArr.push(a[i])
//     }
//     return newArr
// }

const reverseArray = (a) => a.reverse()



console.log(reverseArray(x))
