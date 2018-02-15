# We also want to allow parentheses in our input. Given an expression string using the "+", "-", "(", and ")" operators like "5+(16-2)", write a function to parse the string and evaluate the result.

# Sample input:
#     expression1 = "5+16-((9-6)-(4-2))"
#     expression2 = "22+(2-4)"

# Sample output:
#     evaluate(expression1) => 20
#     evaluate(expression2) => 20



expression1 = "5+16-((9-6)-(4-2))"
# [5, 16-((9-6)-(4-2))]
# [5, 16, ((9-6), (4-2))]
expression2 = "22+(2-4) + (3 - 1 + (2+3))"

def calculator(str)
  str = str.split('+')
  str = str.map do |el, i| # n
    el.split('-').map {|num| num.to_i}.reduce(:-) # m * m
    # str[i] = el.split('-')
  end

  str.reduce(:+)

end

def calc(str)
  count = 0
  paren = []
  i = 0
  while i < str.length
    if str[i] == "("
      count += 1
      paren.push(i)
      i += 1
    elsif str[i] == ")"
      count -= 1
      sum = calculator(str[paren.last + 1...i])
      str = str[0...paren.last] + sum.to_s + str[i + 1..-1]
      i = paren.last + 1
      paren.pop
    else
      i += 1
    end
  end
  calculator(str)
end

p calc(expression1)
p calc(expression2)

# p calculator(expression)
