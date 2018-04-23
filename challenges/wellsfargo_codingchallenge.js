// Write Java program to reverse String in Java without using API functions ?
const reverse = (str) => {
  let rev_str = '';
  for (let i = str.length - 1; i >= 0; i--) {
    rev_str += str[i];
  }
  return rev_str;
}

// console.log(reverse('hello world'));

// Write a Java program to find if a number is prime number or not?
const isPrime = (num) => {
  if (num < 2) {
    return false;
  } else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
  }
  return true;
}

// console.log(isPrime(13));

// Write a Java program to print Fibonacci series upto 100?
// Can replace n with 100 or any number

const fibonacci = (num) => {
  let a = 0, b = 1
  console.log(a);
  console.log(b);
  while (b < num) {
    let temp = b;
    b += a;
    a = temp;
    if (b < num) {
      console.log(b);
    }
  }
}

// fibonacci(100)

// Write a Java program to calculate Factorial of a number in Java?
const factorial = (num) => {
  if (num === 1) {
    return 1
  }
  let ans = factorial(num - 1) * num
  return ans
}

// console.log(factorial(5));
