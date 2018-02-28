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
//
// function hourglass(arr) {
//   let max = -63
//   for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 4; j++) {
//       let sum = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]
//       console.log(sum);
//       max = sum > max ? sum : max
//     }
//   }
//   console.log(max);
// }
//
// let arr1 = [[1,1,1,0,0,0],
//            [0,1,0,0,0,0],
//            [1,1,1,0,0,0],
//            [0,9,2,-4,-4,0],
//            [0,0,0,-2,0,0],
//            [0,0,-1,-2,-4,0]]
//
// // hourglass(arr1)
//
// let arr2 = [[-1,1,-1,0,0,0],
//             [0,-1,0,0,0,0],
//             [-1,-1,-1,0,0,0],
//             [0,-9,2,-4,-4,0],
//             [-7,0,0,-2,0,0],
//             [0,0,-1,-2,-4,0]]
//
// hourglass(arr2)


// function setup() {
//   loadJSON('http://letsrevolutionizetesting.com/challenge', gotData, 'jsonp')
// }
//
// function gotData(data) {
//   console.log(data)
// }

// let url = 'http://letsrevolutionizetesting.com/challenge'
//
// function httpGetAsync(theUrl, callback) {
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.onreadystatechange = function() {
//         if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
//             callback(xmlHttp.responseText);
//     }
//     xmlHttp.open("GET", theUrl, true); // true for asynchronous
//     xmlHttp.send(null);
// }
//
// console.log(httpGetAsync(url))

// let arr1 = [1,3,4,2,6,5]
//
// arr1 = arr1.sort((a,b) => a - b)
// console.log(arr1);

// const longestPalindrome = str => {
//   let n = str.length
//   let tbl = []
//   let max = 1
//   let begin = 0
//   for (let x = 0; x < str.length; x++) {
//     let row = []
//     for (let y = 0; y < str.length; y++) {
//       if (x === y) {
//         row.push(true)
//       } else {
//         row.push(false)
//       }
//     }
//     tbl.push(row)
//   }
//
//   for (let i = 0; i < n - 1; i++) {
//     if (str[i] === str[i + 1]) {
//       tbl[i][i+1] = true;
//       begin = i;
//       max = 2
//     }
//   }
//
//   for (let cl = 3; cl <= n; cl++) {
//     for (let i = 0; i < n - cl + 1; i++) {
//       let j = i + cl - 1
//       if (str[i] === str[j] && tbl[i + 1][j - 1]) {
//         tbl[i][j] = true
//         begin = i
//         max = cl
//       }
//     }
//   }
//
//   return str.slice(begin, begin + max)
//
// }
//
// console.log(longestPalindrome('cccd'));


// const zigzagConvert = (str, row) => {
//   if (row === 1) {return str}
//   let res = [];
//   for (let i = 0; i < row; i++) {
//     res.push([])
//   }
//
//   let counter = 0
//   let pos = true
//   for (let i = 0; i < str.length; i++) {
//     if (pos) {
//       res[counter].push(str[i])
//       if (counter >= row - 1) {
//         pos = false
//         counter -= 1
//       } else {
//         counter += 1
//       }
//     } else {
//       res[counter].push(str[i])
//       if (counter === 0) {
//         pos = true
//         counter += 1
//       } else {
//         counter -= 1
//       }
//     }
//   }
//
//   ans = ''
//   res = res.forEach((arr, i) => {
//     arr = arr.join('')
//     ans += arr
//   })
//
//   return ans
// }
//
// console.log(zigzagConvert("PAYPALISHIRING", 3));

const reverseInt = num => {
  num = num.toString().split('')
  let pos = true
  if (num[0] === '-') {
    pos = false
  }
  num = pos ? num : num.slice(1)
  num = num.reverse().join('')

  if (!pos) {
    num = 0 - parseInt(num)
    return num
  } else {
    return parseInt(num)
  }

}

console.log(reverseInt(-21));
