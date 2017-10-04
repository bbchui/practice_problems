def isPP(n)
  res = nil
  m = 2
  k = 2
  if Math.sqrt(n) % 1 == 0
    return [Math.sqrt(n).to_i, 2]
  end
  until m >= Math.sqrt(n)
    until m**k >= n
      k += 1
    end
    if m**k == n
      return [m, k]
    end
    m += 1
    k = 2
  end
  res
end

def format_duration(seconds)
  return "now" if seconds == 0
  year = seconds / 31536000
  day = (seconds % 31536000) / 86400
  hour = ((seconds % 31536000) % 86400) / 3600
  minute = (((seconds % 31536000) % 86400) % 3600) / 60
  sec = ((((seconds % 31536000) % 86400) % 3600) % 60) % 60

  y = plural("year", year)
  d = plural("day", day)
  h = plural("hour", hour)
  m = plural("minute", minute)
  s = plural("second", sec)

  res = []
  res.push("#{year} #{y}") if y
  res.push("#{day} #{d}") if d
  res.push("#{hour} #{h}") if h
  res.push("#{minute} #{m}") if m
  res.push("#{sec} #{s}") if s

  if res.length > 2
    i = 0
    until i >= res.length - 2
      res[i] = res[i] + ","
      i += 1
    end
    res.insert(res.length - 1, "and").join(" ")
  elsif res.length > 1
    res.insert(res.length - 1, "and").join(" ")
  else
    res.join(" ")
  end
end

def plural(time, num)
  if num == 0
    return nil
  elsif num == 1
    return "#{time}"
  else
    return "#{time}s"
  end
end


def generateHashtag(str)
  return false if str.empty? || str.length > 139
  str = str.split(" ").map {|word| word.capitalize}.join("")
  "##{str}"
end

def to_camel_case(str)
  return "" if str.empty?
  str = str.split("-").map.with_index do |word, i|
    if i == 0
      word = word
    else
      word = word.capitalize
    end
  end.join("").split("_").map.with_index do |word, i|
    if i == 0
      word = word
    else
      word = word.capitalize
    end
  end.join("")
end

# TODO: complete this class

class PaginationHelper

  # The constructor takes in an array of items and a integer indicating how many
  # items fit within a single page
  def initialize(collection, items_per_page)
    @collection = collection
    @items_per_page = items_per_page
  end

  def item_count
    @collection.length
  end

  # returns the number of pages
  def page_count
    number_of_pages = (item_count.fdiv(@items_per_page)).ceil
  end

  # returns the number of items on the current page. page_index is zero based.
  # this method should return -1 for page_index values that are out of range
  def page_item_count(page_index)
    res = (0..(page_count-1)).to_a
    ans = 0
    return -1 if !res.include?(page_index)
    if page_index == res.last
      ans = item_count % @items_per_page
    else
      ans = @items_per_page
    end
  end

  # determines what page an item is on. Zero based indexes.
  # this method should return -1 for item_index values that are out of range
  def page_index(item_index)

    ans = -1
    return ans if item_index > @collection.length - 1 || item_index < 0
    ans = (item_index / @items_per_page).floor
  end
end


def choose_best_sum(t, k, ls)
    ls = ls.sort
    res = 0
    arr = ls.combination(k).map { |x| x.reduce(:+) }
    arr.each do |num|
      if num <= t && num > res
        res = num
      end
    end
    res == 0 ? nil : res
end


def jobs(file)
  res = []
  File.open(file).each do |line|
    p line.split(" ")[0]
  end
end

# jobs('./jobs.txt')

def permsol(string)
  string.split("").permutation.to_a.map { |perm| perm.join("") }.uniq.sort
end

def solution(list)
  res = []
  stack = [list.first]
  i = 1
  until i > list.length
    p stack
    if list[i] == stack.last + 1
      stack.push(list[i])
    elsif stack.length == 2
      res.push(stack[0], stack[1])
      stack = [list[i]]
    elsif stack.length > 2
      res.push("#{stack.first}-#{stack.last}")
      stack = [list[i]]
    else
      res.push(stack[0])
      stack = []
      stack.push(list[i])
    end
    i += 1
  end
    res.push(stack[0]) if stack
    res.join(',')
end

# p solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20, 22])

def tribonacci(arr, n)
  until n == 0
    arr = arr.push(arr[-1] + arr[-2] + arr[-3])
    n -= 1
  end
  arr[0..n]
end

def remove_smallest(numbers)
  # throw NotImplementedError.new "TODO: remove_smallest"
  min = numbers[0]
  pos = 0
  i = 1
  until i >= numbers.length - 1
    if numbers[i] < min
      min = numbers[i]
      pos = i
    end
  end

  arr = numbers.slice(0, i) + numbers.slice(i + 1)
end

def scramble(s1,s2)
  hash1 = {}
  hash2 = {}

  s1.chars.each do |x|
    if hash1[x]
      hash1[x] += 1
    else
      hash1[x] = 1
    end
  end

  s2.chars.each do |x|
    if hash2[x]
      hash2[x] += 1
    else
      hash2[x] = 1
    end
  end

  hash2.each do |k, v|
    if !hash1.include?(k) || hash1[k] < v || !hash1[k]
      return false
    end
  end

  true
end

def sequence_sum(begin_number, end_number, step)
  return 0 if begin_number > end_number
  sum = 0
  until begin_number > end_number
    sum += begin_number
    begin_number += step
  end
  sum
end

def find_it(seq)
  seq.uniq.each {|num| return num if seq.count(num).odd?}
end

def song_decoder(song)
  song.split("WUB").delete_if {|x| x == ""}.join(" ")
end

def one_two_three(n)
  return [0, 0] if n == 0
  sum = ""
  n.times {|x| sum += "1"}
  sum2 = ""
  (n/9).times {|x| sum2 += "9"}
  sum2 += (n % 9).to_s unless n % 9 == 0
  [sum2.to_i, sum.to_i]
end

def dirReduc(arr)
  removed = true
  until removed == false
    removed = false
    i = 0
    until i >= arr.length - 1
      if (arr[i] == "NORTH" && arr[i + 1] == "SOUTH") || (arr[i] == "SOUTH" && arr[i + 1] == "NORTH") || (arr[i] == "EAST" && arr[i + 1] == "WEST") || (arr[i] == "WEST" && arr[i + 1] == "EAST")
        arr.delete_at(i)
        arr.delete_at(i)
        removed = true
      else
        i += 1
      end
    end
  end
  arr
end

def two_sum(nums, target)
    nums.each_with_index do |x, i|
        if nums.include?(target - x) && i != nums.index(target - x)
            return [i, nums.index(target - x)]
        end
    end
end

# public int[] twoSum(int[] nums, int target) {
#     Map<Integer, Integer> map = new HashMap<>();
#     for (int i = 0; i < nums.length; i++) {
#         int complement = target - nums[i];
#         if (map.containsKey(complement)) {
#             return new int[] { map.get(complement), i };
#         }
#         map.put(nums[i], i);
#     }
#     throw new IllegalArgumentException("No two sum solution");
# }

# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

# @param {ListNode} l1
# @param {ListNode} l2
# @return {ListNode}
# def add_two_numbers(l1, l2)
#
#     l3 = ListNode.new(0)
#     nodelist1 = l1
#     nodelist2 = l2
#     curr = l3
#     carry = 0
#     while nodelist1 != nil || nodelist2 != nil
#         x = nodelist1 != nil ? nodelist1.val : 0
#         y = nodelist2 != nil ? nodelist2.val : 0
#         sum = x + y + carry
#
#         curr.next = ListNode.new(sum % 10)
#         curr = curr.next
#
#         carry = sum / 10
#
#         nodelist1 = nodelist1 != nil ? nodelist1.next : nil
#         nodelist2 = nodelist2 != nil ? nodelist2.next : nil
#     end
#
#     if carry > 0
#         curr.next = ListNode.new(carry)
#     end
#     l3.next
# end

# def length_of_longest_substring(s)
#     start = 0
#     i = 0
#     longest = 0
#     map = Hash.new(0)
#     while i < s.length
#         if map[s[i]] == 0
#             longest = longest > (i - start + 1) ? longest : (i - start + 1)
#             map[s[i]] += 1
#             i += 1
#         else
#             map[s[start]] -= 1
#             start += 1
#         end
#     end
#     longest
# end

def longest_palindrome(s)
    return 0 if s.length == 0
    i = 0
    tbl = []
    longest = 1
    start = 0
    while i < s.length # single letters
        arr = []
        j = 0
        while j < s.length
            arr.push(false)
            j += 1
        end
        tbl.push(arr)
        i += 1
    end
    s = s.chars
    s.each_index {|x| tbl[x][x] = true}
    s.each_index do |x| #two same letters next to each other
        if  s[x] == s[x + 1]
            tbl[x][x+1] = true
            if 2 > longest
                longest = 2
                start = x
            end
        end
    end
    k = 3 #check for lengths greater than 2
    while k <= s.length
        j = 0 #setting starting index
        while j < s.length - k + 1
            l = j + k - 1 #getting end index of substring from starting index j and length k

            #checking for substring from j-th index to l-th index if it is a palindrome
            if (tbl[j + 1][l - 1] && s[j] == s[l])
                tbl[j][l] = true
                if k > longest
                    longest = k
                    start = j
                end
            end
            j += 1
        end
        k += 1
    end
    s[start...start + longest].join
end
