// ------ Exercise 1 ------ //
/* You are given an object representing 
a person's basic information. Write a 
function that iterates over the object (for in) 
and logs each property name along with its 
corresponding value. */

const person = {
  name: "Alice",
  age: 30,
  city: "Wonderland",
  occupation: "Adventurer",
};

// WRITE THE FUNCTION HERE
function displayAllDetails() {
  for (const key in person) {
    console.log(`The ${key} is ${person[key]}`);
  }
}
// DON't FORGET TO CALL THE FUNCTION!
displayAllDetails();

// ------ Exercise 2 ------ //

/* You are doing Marcel's job 😅 and given 
an object representing student names and their 
corresponding grades. 
Write a function that calculates the average 
grade for each student and logs the result to 
the console (use the for in).*/

const studentGrades = {
  John: [85, 90, 88],
  Emma: [92, 95, 89],
  Ryan: [78, 85, 80],
  Sophia: [95, 90, 92],
};

// WRITE THE FUNCTION HERE
function calculateAverage() {
  for (const key in studentGrades) {
    let sum = 0;
    for (let i = 0; i < studentGrades[key].length; i++) {
      sum += studentGrades[key][i];
    }
    console.log(`${key} has an average of ${sum / studentGrades[key].length}`);
  }
};

// DON't FORGET TO CALL THE FUNCTION!
calculateAverage();
