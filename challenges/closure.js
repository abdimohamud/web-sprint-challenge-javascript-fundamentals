// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
// When a function is declared and created, a new scope is also created. Any variables declared within that function’s scope will be enclosed in a lexical/private scope that belongs to that function.


/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation (nums) {
  numCount = 0;
  for (let i = 0; i<nums+1; i++){
    numCount = (numCount + i);
  }
  return numCount
}
console.log(summation(4));