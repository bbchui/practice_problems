mat =[[1,1,1,1,1],
      [1,1,1,0,1],
      [1,1,0,1,1],
      [1,1,1,0,1],
      [1,1,1,1,1]]

# mat = [[1,1],[1,1]]
# geeksforgeeks

def largest_submatrix(matrix)
  largest = 0
  x = 0
  while x < matrix.length - 1
    p x
    y = 0
    count = 1
    while y < matrix.length - 1
      temp = []
      (x..x + count).each do |i|
        (y..y + count).each do |idx|
          break if idx >= matrix.length - 1
          break if i >= matrix.length - 1
          temp.push(matrix[i][idx])
        end
      end
      if temp.all? { |num| num == 1 }
        count += 1
      else
        y += 1
        if count > largest
          largest = count
        end
        count = 1
      end
    end
    x += 1
  end
  largest
end

p largest_submatrix(mat)
