// Test 1: Any language (required)
// Write a program that outputs sequentially the integers from 1 to 99 but on some conditions prints a string instead:
// - when the integer is a multiple of 3 print “Open” instead of the number,
// - when it is a multiple of 7 print “Source” instead of the number,
// - when it is a multiple of both 3 and 7 print “OpenSource” instead of the number.

function opensource() {
  for (let i = 1; i < 100; i++) {
    if (i % 7 === 0 && i % 3 === 0) {
      console.log('OpenSource');
    } else if (i % 3 === 0) {
      console.log('Open');
    } else if (i % 7 === 0) {
      console.log('Source');
    } else {
      console.log(i);
    }
  }
}

// opensource()

// Test 2: Any language (required)
// Expand a random range from 0-5 to 0-7. Given a function rand5() that returns a random float in the range [0,5] with a uniform distribution, write a function that returns a random float in the range [0,7] using only rand5() and keeping a uniform distribution.

function rand5(x = 0) {
  return Math.floor(Math.random() * Math.floor(x + 6));
}

function rand7() {
  return rand5(2);
}

// console.log(rand7());

// Test 3: Any language (required)
// Write a function that takes a list of strings and returns the sum of the list items that represents an integer (skipping the other items)

// I'm going to assume the list of strings is in an array

let random_str = ['a', '1', 'b', 'c', '12', '23', 'thanks', 'odoo', '10', 'high', '5']

function iterativeSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let num = parseInt(arr[i])
    if (Number.isInteger(num)) {
      sum += num;
    }
  }
  return sum;
}

// console.log(iterativeSum(random_str)); // 51

// Test 4: Any language (required)
// Write a recursive version of the previous function (or an iterative version if you already did a recursive version).

function recursiveSum(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sum = 0;
  let num = parseInt(arr[0]);
  if (Number.isInteger(num)) {
    sum += num + recursiveSum(arr.slice(1));
  } else {
    sum += recursiveSum(arr.slice(1));
  }
  return sum;
}

// console.log(recursiveSum(random_str)); //51

// Test 5: Any language (required)
// Write a program to download the contents of http://www.sap.com/belgique/index.html (the SAP homepage for Belgium), and then save the contents of the page to a new local file, with all occurrences of "SAP" replaced by "Odoo". This code should be ready to compile and run (all imports etc. should be included).

let https = require('https');
let fs = require('fs');

let options = {
  hostname: "www.sap.com",
  port: 443,
  path: "/belgique/index.html",
  method: "GET"
}

let req = https.request(options, function(res) {

  let responseBody = "";
  res.setEncoding("UTF-8");

  res.on("data", function(chunk) {
    chunk = chunk.split(' ')
    for (var i = 0; i < chunk.length; i++) {
      if (chunk[i] === 'SAP') {
        chunk[i] = 'Odoo'
      }
    }
    chunk.join(' ')
    responseBody += chunk
  })

  res.on('end', function() {
    fs.writeFile('new_index.html', responseBody, function(err) {
      if (err) {
        throw err
      }
    })
  })
})

req.on("error", function(err) {
  console.log(`problem with request: ${err.message}`);
})

// Test 6: Any language (required)
// You have a huge file named "data.bin" that does not fit in memory, code a program that deletes every 7th byte of it. This should happen in-place, no second file should be created. truncate can be used to change a file's size.

// I am not sure how to access the bytes from a file with JavaScript or Ruby. If the bytes are returned in an array, we could just delete every 7th byte in place which would take linear time as you traverse through the array.

// Test 7: Regular Expression (if you know regexes)
// Write a regular expression to match strings containing both "Odoo" and "#rules" in any order.

// (?=.*Odoo)(?=.*#rules).*$

// Test 8: Javascript (if you know javascript)
// Given the following code, write two lines of Javascript to call the print() function in a way that prints the Window global object in the Javascript console ?
// Your code must not use the variable `window`. Feel free to comment.

// const Printer = function(){
//     this.print = function() {
//        console.log(this);
//     }
// }
// var printer = new Printer();
// console.log(Printer);

// console.log(top)
// I'm not sure what the Printer object is for, but we could just call top or console.log(top) in the Javascript console to access the window global object.

// Test 9: Unix (if you know C and Unix)
// Write a C program that roughly measures the overhead of a context switch between the kernel and userspace on a UNIX/Linux system (without using the pthread API). Please indicate the assumptions your rough estimation is based on.

// Test 10: SQL (if you know SQL)
// Write pseudo-SQL statements to create database tables to store the products of a basic webshop.
// - Each product has a name, a price, a creation date and may belong to several categories. Categories have a name and a flag to indicate whether the category is private or public.
// - Imagine that these tables are populated with 10000 products and 300 categories, with products being assigned a random set of public and private categories. Write a SQL query to find the list of products that belong to more than 5 public categories.
// - How would you populate the tables with test data (thousands of products with random values and categories)

// I am only familiar with PostgreSQL but I know it is very similar to other SQL databases

CREATE DATABASE product
  ADD COLUMN name string
  ADD COLUMN price integer
  ADD COLUMN creation_date date
  ADD COLUMN category_id integer

CREATE DATABASE catagory
  ADD COLUMN id integer
  ADD COLUMN name string
  ADD COLUMN private boolean

SELECT name FROM product join category
  on category_id = category_id
  WHERE COUNT(category_id) >= 5
  HAVING COUNT(private = false) >= 5
