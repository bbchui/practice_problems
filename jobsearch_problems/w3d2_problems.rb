# const rand = (max) => Date.now() % max
#
# const shuffle = (arr) => {
#   for (let i = 51; i > 0; i--) {
#     let dummy = arr[i]
#     let newIdx = rand(i)
#     arr[i] = arr[newIdx]
#     arr[newIdx] = dummy
#   }
#   return arr
# }
#
# const arr = () => {
#   let emp = []
#   for (let i = 0; i < 52; i++) {
#     emp.push(i)
#   }
#   return emp
# }
#
# // console.log(shuffle(arr()))
