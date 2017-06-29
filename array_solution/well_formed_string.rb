#A string with the characeters [,],{,},(,) is said to be well-formed if the different types of brakcets match in the correct order
#For example, ([]) {()} is well formed but [(]{)} is not. Write a function to test whether a string is well-formed

def well_formed?(str)
  left_stack = []
  lookup = { '(' => ')', '[' => ']', '{' => '}' }

  str.chars.each do |char|
    if lookup.keys.include?(char)
      left_stack.push(char)
    elsif left_stack.length == 0 || lookup[left_stack.pop] != char
      return false
    end
  end
  return left_stack.empty?
end
