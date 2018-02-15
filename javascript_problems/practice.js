// const fib = (n, memo = [0, 1]) => {
//   if (n === 0) {
//     return 0
//   } else if (n === 1) {
//     return 1
//   } else if (memo[n]) {
//     return memo[n]
//   }
//   let result = fib(n - 2, memo) + fib(n - 1, memo)
//   memo[n] = result
//   return result
// }
//
// console.log(fib(5))

// const bottom_up_fib = (n) => {
//   if (n === 0) {
//     return 0
//   } else if (n === 1) {
//     return 1
//   }
//   let bottom_up = []
//   bottom_up[0] = 0;
//   bottom_up[1] = 1;
//   for (var i = 2; i < n + 1; i++) {
//     bottom_up[i] = bottom_up[i - 1] + bottom_up[i - 2]
//   }
//   return bottom_up[bottom_up.length - 1]
// }
//
// console.log(bottom_up_fib(35));

// function coinChange(amount, coins){
//     // Complete this function
//     let table = [];
//     for (let i = 0; i < amount + 1; i++) {
//         table[i] = 0
//     }
//     table[0] = 1
//
//     for (let j = 0; j < coins.length; j++) {
//         let coin = coins[j];
//
//         for (let k = coin; k <= amount; k++) {
//             let remainder = k - coin
//             // creates table of [1,1,1,1,1,1....]
//             table[k] += table[remainder]
//             // next coin will add 1
//         }
//         console.log(table);
//     }
//     console.log(table[amount])
// }
//
// coinChange(6, [1,5])

function hourglass(arr) {
  let max = -63
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j++) {
      let sum = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]
      console.log(sum);
      max = sum > max ? sum : max
    }
  }
  console.log(max);
}

let arr1 = [[1,1,1,0,0,0],
           [0,1,0,0,0,0],
           [1,1,1,0,0,0],
           [0,9,2,-4,-4,0],
           [0,0,0,-2,0,0],
           [0,0,-1,-2,-4,0]]

// hourglass(arr1)

let arr2 = [[-1,1,-1,0,0,0],
            [0,-1,0,0,0,0],
            [-1,-1,-1,0,0,0],
            [0,-9,2,-4,-4,0],
            [-7,0,0,-2,0,0],
            [0,0,-1,-2,-4,0]]

hourglass(arr2)
