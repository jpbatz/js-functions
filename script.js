// Please make sure all your code is added inside the `runAfterTests` function.
function runAfterTests() {
  /**
   * Follow the comments below.
   * Feel free to use `console.log` to see what values are being returned.
   */

  // Create a variable called `myNumber`, and assign it to any number
var myNumber = 33;
console.log("myNumber = " + myNumber);
  /**
   * Create another variable called `stringValue`.
   * Assign it the value that's returned when you pass
   * `myNumber into the function `numberToString`.
   */
var stringValue = numberToString(myNumber);
console.log("stringValue is " + stringValue);
  /**
   * If you pass `myNumber` and `stringValue` into `areEqual`,
   * what value will you get back? Why is that?
   */
// ===== FALSE, because i used the strict comparison ===, instead of ==, which would have returned true.
console.log("are myNumber and stringValue equal? " + areEqual(myNumber,stringValue));
console.log("that's correct, because areEqual() uses '===' strict comparison.");
  /**
   * You may have noticed that the `calculate` function combined
   * the functionality of `add`, `subtract`, `multiply`, and `divide`.
   * Did you try to use those functions _inside_ of `calculate`?
   * If you didn't go back and try it, this is called "reusability"!
   */
// ===== YES, I did reuse code.
console.log("employed 'reusability' concept with calculate().");
  // Do you see any other functions where code could be reused?
// ===== YES, multiply(x,x) for square(x), and increse(n) in restaurant.reviews++
console.log("functions were used: multiply(x,x) for square(x), and increase(n) in restaurant.reviews++");
  /**
   * For your `letterGrade` function,
   * what happens if you provide a `score` that is less than 0,
   * or greater than the `total` value?
   * Does it still work as expected? If it doesn't, how could you improve this?
   */
// ===== YES, still works, but result is undefined.  Added -1 to be returned.
console.log("letterGrade returns nothing for out of bound values > 100 and < 0");
console.log("added return of -1 for those results");
  /**
   * Your `combine` function looks okay,
   * but what if you wanted to join it with ANY string instead of a single space?
   * Create a new function called `improvedCombine`,
   * with the same parameters as `combine`, but also add a
   * third parameter called `glue` (a string value).
   */
function improvedCombine(word1,word2,glue) {

  return word1 + " " + glue + " " + word2;
}

console.log("improvedCombine():");
console.log(improvedCombine("combine","improved","is"));

  // What happens if you were to uncomment the following lines?

  // combine = improvedCombine;
  // console.log(combine('combine', 'improved!', ' is '));

// ===== HMMM...cannot assign a function.
console.log("adding statement, 'combine = improvedCombine' is illegal.  cannot assign a function, only var can be assigned.");

}
