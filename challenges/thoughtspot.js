// // map (NxN)
// // [1,0,0]
// // [1,0,0]
// // [1,1,1]
// //
// // Result: (0,0), (1,0), (2,0), (2, 1), (2, 2)
// //

let map = [[1,0,0],
          [1,0,0],
          [1,1,2]]

function navigate(map, column = 0, row = 0) {
  // let dest = ;

  if (map[column][row] === 2) {
    return [column, row];
  } else if (map[column][row] === 1) {
    map[column][row] = 3;
    if (column < map.length - 1) {
      navigate(map, column + 1, row)
    }
    if (row < map.length - 1) {
      navigate(map, column, row + 1)
    }
    if (column > 0) {
      navigate(map, column - 1, row)
    }
    if (row > 0) {
      navigate(map, column, row - 1)
    }
  }
}

console.log(navigate(map));


// function navigate(map, dest = [map.length - 1, map.length - 1]) {
//     // let dest = [map.length - 1, map.length - 1];
//     let start = [0,0];
//     let path = [];
//     let visited = [];
//
//     for (let i = 0; i < map.length; i++) {
//         let arr = [];
//         for (let j = 0; j < map.length; j++) {
//             arr.push(0)
//         }
//         visited.push(arr)
//     }
//
//     return helper(map,[map.length - 1, map.length - 1], visited);
// }
// //
// function helper(map, dest, visited) {
//
//     if (dest === [0,0]) {
//         return true
//     }
//     let len = map.length - 1
//     // let hei = map[0].length - 1
//     let up = [dest[0] - 1, dest[1]]
//     let down = [dest[0] + 1, dest[1]]
//     let left = [dest[0], dest[1] - 1]
//     let right = [dest[0], dest[1] + 1]
//
//
//     let one = false, two = false, three = false, four = false;
//
//     if (up[0] < len && up[0] > -1 && up[1] < len && up[1] > -1) {
//       if(map[up[0]][up[1]] === 1 && visited[up[0]][up[1]] === 0) {
//         //other logic
//         visited[up[0]][up[1]] = 1
//         one = helper(map, up, visited)
//       }
//     }
//     if (down[0] < len && down[0] > -1 && down[1] < len && down[1] > -1) {
//       if(map[down[0]][down[1]] === 1 && visited[down[0]][down[1]] === 0) {
//           visited[down[0]][down[1]] = 1
//           two = helper(map, down, visited)
//         }
//     }
//     if (left[0] < len && left[0] > -1 && left[1] < len && left[1] > -1) {
//       if(map[left[0]][left[1]] === 1 && visited[left[0]][left[1]] === 0) {
//           visited[left[0]][left[1]] = 1
//           three = helper(map, left, visited)
//         }
//     }
//     if (right[0] < len && right[0] > -1 && right[1] < len && right[1] > -1) {
//       if(map[right[0]][right[1]] === 1 && visited[right[0]][right[1]] === 0) {
//           visited[right[0]][right[1]] = 1
//           four = helper(map, right, visited)
//       }
//     }
//
//    return (one || two || three || four)
// }
// //
// //
// //
//  console.log(navigate(map))
