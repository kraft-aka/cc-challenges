// Write a function, dogFactory(). It should:

// have 3 parameters: name, breed, and weight (in that order)
// expect name and breed to be strings
// expect weight to be a number
// return an object
// have each of those parameters as keys on the returned object returned with the values of the arguments that were passed in
// dogFactory('Joe', 'Pug', 27)
// // Should return { name: 'Joe', breed: 'Pug', weight: 27 }
// Checkpoint 2 Passed

// Stuck? Get a hint
// 2.
// Add getters and setters for each of the three properties and change the property names to have an underscore prepended.

// Checkpoint 3 Passed

// Hint
// const objFactory = param => {
//     return {
//         _param: param,
//         get param() {
//             return this._param;
//         },
//     }
// }
// exampleObj = objFactory("example")
// exampleObj.param //returns "example"
// Check out the getters and setters exercises of the lesson to review in more depth.

// 3.
// Add two methods to your object: .bark() which returns ‘ruff! ruff!’ and .eatTooManyTreats() which should increment the weight property by 1.

// Write your code here:

const dogFactory = (name, breed, weight) => {
  return {
    _name: name,
    _breed: breed,
    _weight: weight,
    get name() {
      return this._name;
    },
    get breed() {
      return this._breed;
    },
    get weight() {
      return this._weight;
    },
    set name(newName) {
      this._name = newName;
    },
    set breed(newBreed) {
      this._breed = newBreed;
    },
    set weight(newWeight) {
      if (typeof newWeight === "number") {
        this._weight = newWeight;
      } else {
        console.log("invalid value");
      }
    },
    bark() {
      return "ruff! ruff!";
    },
    eatTooManyTreats() {
      return (this._weight += 1);
    },
  };
};
