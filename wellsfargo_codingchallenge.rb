# Write Java program to reverse String in Java without using API functions ?

def reverse(str)
  i = str.length - 1
  rev_str = ''
  while i >= 0
    rev_str += str[i]
    i -= 1
  end
  rev_str
end

# p reverse('hello world')

# Write a Java program to find if a number is prime number or not?
def is_prime?(num)
  return false if num < 2
  i = 2
  while i <= Math.sqrt(num)
    if num % i == 0
      return false
    end
    i += 1
  end
  true
end

# p is_prime?(11)

# Write a Java program to print Fibonacci series upto 100?
# Can replace n with 100 or any number
def fib_to_hundred(n)
  arr = [0, 1]
  p arr[0], arr[1]
  while arr.last <= n
    arr.push(arr[-1] + arr[-2])
    p arr.last if arr.last <= n
  end
end

# fib_to_hundred(100)

# Write a Java program to calculate Factorial of a number in Java?
def factorial(n)
  return 1 if n == 1
  ans = n * factorial(n - 1)
end

# p factorial(5)
