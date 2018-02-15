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

function coinChange(amount, coins){
    // Complete this function
    let table = [];
    for (let i = 0; i < amount + 1; i++) {
        table[i] = 0
    }
    table[0] = 1

    for (let j = 0; j < coins.length; j++) {
        let coin = coins[j];

        for (let k = coin; k <= amount; k++) {
            let remainder = k - coin
            // creates table of [1,1,1,1,1,1....]
            table[k] += table[remainder]
            // next coin will add 1
        }
        console.log(table);
    }
    console.log(table[amount])
}

coinChange(6, [1,5])
