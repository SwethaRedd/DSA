//This is to reverse original array - not the copy of the array?

//
//Approach 2: O(1), O(1) -linear search
/*
2 pointer approach 
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

// Approach 1:

function reverseArray(arr) {
  let n = arr.length;
  // console.log(n);
  let temp = [];
  for (i = 0; i < n; i++) {
    temp[i] = arr[n - 1 - i];
  }
  console.log(temp);
  return arr;
}

// Time O(n) , Space = O(1)
// console.log(reverseArray([1, 2, 3]));
