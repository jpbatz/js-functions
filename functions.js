/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */
function numberToString(n) {
  return n.toString();
}
/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */
function increase(n) {
  return n+1;
}
/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */
function decrease(n) {
  return n-1;
}
/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
function add(x,y) {
  return x+y;
}
/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */
function subtract(x,y) {
  return x-y;
}
/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */
function multiply(x,y) {
  return x*y;
}
/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */
function divide(x,y) {
  return x/y;
}
/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */
function square(x) {
  return multiply(x,x);
}
/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */
var result;
function calculate(operation,x,y) {
  switch(operation) {
    case "add":
      result=add(x,y);
      console.log(x + " + " + y + " = " + result);
      break;
    case "subtract":
      result=subtract(x,y);
      console.log(x + " - " + y + " = " + result);      
      break;
    case "multiply":
      result=multiply(x,y);
      console.log(x + " * " + y + " = " + result);
      break;
    case "divide":
      result=divide(x,y);
      console.log(x + " / " + y + " = " + result);
      break;
    default:
  }
  return result;
}
/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */
function isGreaterThan(a,b) {
  if(a>b) {
    return true;
  } else {
    return false;
  }
}
/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */
function isLessThan(a,b) {
  if(a<b) {
    return true;
  } else {
    return false;
  }
}
/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */
function areEqual(a,b) {
  if(a===b) {
    return true;
  } else {
    return false;
  }
}
/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */
function minimum(x,y) {
  if(x<y) {
    return x;
  } else if(y<x) {
    return y;
  } else {
    return -1;
  }
}
/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */
function maximum(x,y) {
  if(x>y) {
    return x;
  } else if(y>x) {
    return y;
  } else {
    return -1;
  }
}
/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */
function isEven(n) {
  if(n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */
function isOdd(n) {
  if(n % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}
/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */
function letterGrade(score,total) {
  var numGrade = score/total*100;

  if (numGrade >= 90 && numGrade <= 100) {
    return "A";
  } else if (numGrade >= 80 && numGrade < 90) {
    return "B";
  } else if (numGrade >= 70 && numGrade < 80) {
    return "C";
  } else if (numGrade >= 60 && numGrade < 70) { // test should test for <= 69, not 70
    return "D";
  } else if (numGrade >= 0 && numGrade < 60) {
    return "F";
  } 
}
/**
 * Checks if a `restaurant` object has are `views` field.
 * If it does, increase it by 1. If it does not,
 * set itsreviews` field to 1.
 * @param {object} restaurant represents a restaurant
 */
function incrementReviews(restaurant) {

  if(restaurant.reviews) {
    restaurant.reviews = increase(restaurant.reviews);
  } else {
    restaurant = {reviews: 1};
  }
  return restaurant;

}
/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */
function combine(word1,word2) {
  return word1 + " " + word2;
}
/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */
function createCircle(radius) {

  var a = Math.PI*radius*radius;
  var c = 2*Math.PI*radius;

  var circle =  {
    circumference: c,
    area: a
  };
  return circle;
}

//var circle = new createCircle(4);