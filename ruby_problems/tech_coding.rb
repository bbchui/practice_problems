# Copyright 2016-2017 Karat, Inc.  Please do not distribute or republish.


# Write a function that, for two given individuals in our dataset, returns true if and only if they share at least one ancestor.
# Sample input and output:

# parentChildPairs, 3, 8 => false
# parentChildPairs, 5, 8 => true
# parentChildPairs, 6, 8 => true



# Parents atop children

# 1   2   4
#  \ /   / \
#   3   5   8
#    \ / \   \
#     6   7   9

# [parent, child]

def parent_nodes(node1, node2)
  parent_child_pairs = [[1, 3], [2, 3], [3, 6], [5, 6], [5, 7], [4, 5], [4, 8], [8, 9]]
  parents = {}
  i = 0
  parent_child_pairs.each do |arr|
    if parents[arr[1]]
      parents[arr[1]].push(arr[0])
    else
      parents[arr[1]] = [arr[0]]
    end
  end

  p ancestor(parents, node1).any? {|node| ancestor(parents, node2).include?(node)}

  # p parents
end

def ancestor(obj, n)
  return [] if obj[n].nil?
  arr = obj[n]
  obj[n].each do |el|
    arr.concat(ancestor(obj, el))
  end
  arr
end

parent_nodes(1, 8)

# Your function here:
# def find_parents(arr)
#   child = arr.flatten.uniq
#   i = 0
#   parent = {}
#   while i < child.length
#     parent[child[i]] = 0
#     i += 1
#   end
#
#   j = 0
#   while j < arr.length
#     parent[arr[j][1]] += 1
#     j += 1
#   end
#
#   parent

#   zero_parents = []
#   one_parents = []

#   parent.each do |key, value|
#     if value == 0
#       zero_parents.push(key)
#     elsif value == 1
#       one_parents.push(key)
#     end
#   end
#   [[zero_parents],[one_parents]]
# end

# p find_parents(parent_child_pairs)

# def parentChildPairs(arr,a,b)
#   i = 0
#   parent = {}
#   while i < child.length
#     parent[arr[i][1]] = arr[i][0]
#     i += 1
#   end
#
#   p parent
# end
#
# p parentChildPairs()
