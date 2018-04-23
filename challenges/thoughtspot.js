// // map (NxN)
// // [1,0,0]
// // [1,0,0]
// // [1,1,1]
// //
// // Result: (0,0), (1,0), (2,0), (2, 1), (2, 2)
// //
//
//
//
// function navigate(map, dest = [map.length - 1, map.length - 1]) {
//     // let dest = [map.length - 1, map.length - 1];
//     let start = [0,0];
//
//     let path = [];
//
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
//
// function helper(map, dest, visited) {
//
//     if (dest === [0,0]) {
//         return [[0,0]]
//     }
//
//     let up = [dest[0] - 1, dest[1]]
//     let down = [dest[0] + 1, dest[1]]
//     let left = [dest[0], dest[1] - 1]
//     let right = [dest[0], dest[1] + 1]
//
//     let one = false, two = false, three = false, four = false;
//
//     if(map[up[0]][up[1]] == 1 && visited[up[0]][up[1]] == 0) {
//         //other logic
//         visited[up[0]][up[1]] = 1
//         one = helper(map, up, visited)
//     }
//
//
//     if(map[down[0]][down[1]] == 1 && visited[down[0]][down[1]] == 0)
//         visited[down[0]][down[1]] = 1
//         two = helper(map, down, visited)
//
//     if(map[left[0]][left[1]] == 1 && visited[left[0]][left[1]] == 0)
//         visited[left[0]][left[1]] = 1
//         three = helper(map, left, visited)
//
//      if(map[right[0]][right[1]] == 1 && visited[right[0]][right[1]] == 0)
//         visited[right[0]][right[1]] = 1
//         four = helper(map, right, visited)
//
//    return (one || two || three || four).append(dest);
// }
//
//
//
