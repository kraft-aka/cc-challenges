// Write a function sortSpeciesByTeeth() that takes in an array of species objects in the format:

// {speciesName: 'shark', numTeeth: 50 }
// and sorts the array in ascending order based on the average number of teeth that species possesses (numTeeth) .

// You’ll need to access each object’s .numTeeth property. Feel free to either write a named comparison function, or use
//an anonymous function for your argument to .sort().

// You can test your function when you’re ready by passing in the speciesArray array or by making your own!

const speciesArray = [
  { speciesName: "shark", numTeeth: 50 },
  { speciesName: "dog", numTeeth: 42 },
  { speciesName: "alligator", numTeeth: 80 },
  { speciesName: "human", numTeeth: 32 },
];

// Write your code here:

const sortSpeciesByTeeth = (arr) => {
  return arr.sort((a, b) => a.numTeeth - b.numTeeth);
};

// Feel free to comment out the code below when you're ready to test your function!

console.log(sortSpeciesByTeeth(speciesArray));

// Should print:
// [ { speciesName: 'human', numTeeth: 32 },
//   { speciesName: 'dog', numTeeth: 42 },
//   { speciesName: 'shark', numTeeth: 50 },
//   { speciesName: 'alligator', numTeeth: 80 } ]
