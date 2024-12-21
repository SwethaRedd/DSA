/*
  Find out smallest number from an array and largest number from an array
let arr = [2, 32,4, 0, -5];
let smallest = +Infinity;
let largest = -Infinity;
for( let i= 0; i < arr.length; i++ ){

a[0] = 2
1 = 32
2 = 4
3 = 0
4 = -5

algo: 
Smallest
1. define and initialize smallest number as +Infinity (we will assign it to the max number, coz the smallest values should always be small)
2. run for loop - to go over each element of an array 
    check if the arr[i] < smallest 
    smallest = arr[i]
    return the smallest

  */

// smallest & find the index of the smallest value
function smallestValue(arr) {
  let smallest = 0;
  let index;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i]; // assigning the value to smallest
      index = i; // index value
    }
  }
  return { smallest, index };
}
smallestValue([2, 32, 4, 0, -5]); // -5
console.log(smallestValue([2, 32, 4, 0, -5])); // 32

/*
      Largest : 
    Algo: 
    1. define and initialize lasrgest number as -Infinity (we will assign it to the min number, coz the largest values should always be big)
    2. run for loop - to go over each element of an array 
        check if the arr[i] > largest 
        largest = arr[i]
        return the largest
      */

// Largest &the index of the largest value alos
function largestValue(arr) {
  let largest = -0;
  let index;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
      index = i;
    }
  }
  return { largest, index };
}
largestValue([2, 32, 4, 0, -5]);

console.log(largestValue([2, 32, 4, 0, -5])); // 32
