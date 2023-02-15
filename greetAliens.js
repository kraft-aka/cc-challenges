// Write a function, greetAliens(), that takes in an array of 
// strings and uses a for loop to print a greeting with each string in the array.

// The greeting should take the following format:
// “Oh powerful [stringElement], we humans offer our unconditional surrender!”

function greetAliens(arr) {
  const greeting = "we humans offer our unconditional surrender!";
  for (let alien = 0; alien < arr.length; alien++) {
    console.log(`Oh powerful ${arr[alien]}, ${greeting}`);
  }
}


const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens);