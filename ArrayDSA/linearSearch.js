/*
Linear Search Algo: 
rules: Time Complexity:  O(n) - Linear time complexity


1. run a loop 
(let i=0; i<arr.length; i++ )
  check condition:   
    if (arr[i] == target){
        return i 
    } else return -1;

Algo: 
if you don't find the target element in an array , return -1 index
else return the target element index.

*/

function linearSearch(arr) {
  let target = 9;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return i; // returning the index of the element
    }
  }
  return -1; // NOT FOUND THE VALUE
}
console.log(linearSearch([4, 2, 7, 8, 1, 2, 5])); // -1 -> as it doesn't find the target value 9, it returns '-1'
console.log(linearSearch([4, 2, 7, 9, 1, 2, 5])); // 3 -> as the target value 9 is in the index:3

//Reverse original array - not the copy of the array?

/*
2 pointer approach  O(1), O(1) -linear search
Swap the pairs concept:

*/

function reverseArray(arr) {
  let start = 0;
  let end = arr.length - 1; // end will always be arr.length-1
  /*
  
  lets say you have odd size array : At some point, both start and end points will be pointing at the same middle index. Ex: start = end
  lets say you have even size array, then when you keep on swapping the items, at some point, the start will be greater than end (ex: start > end), then you end up swapping it back to the initial array and you keep on doing it, there is no end for it.
  so in these 2 cases, you need find out a logic to handle these 2 cases, where the end always should be greater than the start.

  */
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  return arr;
}

console.log(reverseArray([4, 2, 7, 8, 1, 2, 5]));
console.log(reverseArray([4, 2, 7, 1, 2, 5]));
console.log(reverseArray([3, 2, -1, 8, 0, 2, 5]));
