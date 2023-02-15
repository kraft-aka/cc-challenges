
// Write a function, reverseArray(), that takes in an array as 
//an argument and returns a new array with the elements in the reverse order.
//   There’s a built -in method that does a lot of this work for you, but
// here you’re not allowed to use it.

function reverseArray(arr) {
  let newArray = [];
  let i = arr.length-1;

  for (; i >= 0; i--) {
    newArray.push(arr[i])
  }
  return newArray;
}


const sentence = ["sense.", "make", "all", "will", "This"];

console.log(reverseArray(sentence));