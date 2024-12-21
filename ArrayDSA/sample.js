/* 

=========================================================================================
4. second largest number in an array  

        let arrayIndex = 0; 
        
        // Move non-zero elements forward

        for (let i=0; i< arr.length; i++){
            if(arr[i] !== 0){
                arr[arrayIndex] = arr[i];
                arrayIndex ++ ;
            } 
        }
         // Fill the rest of the array with zeros
        for (let i= arrayIndex; i<arr.length; i++ ){
            arr[i] = 0;
        }
        return arr;


=========================================================================================
3. Move zeros to the right? arrays should not be copied

i/p: let arr = [1,0,2,3,1,0] 
arr index    =  0,1,2,3,4,5
0/p: zerosMoved = [1,2,3,1,0,0]

Algo: 
1. let arrayIndex = 0;
2. run for loop
      check for nonZeros if arr[i]!=0 
      and move the elements to the front indexes (left side)
      arr[arrayIndex] = arr[i]
      and increase arrayIndex++;
3. run for loop
assign arrayIndex to i 
    for(let i= arrayIndex; i< arr.length; i++)
    move all the zero elements to add in the end of the array 
arr[i] = 0

for( arrayIndex; arrayIndex <arr.length; arrayIndex ++ ){
if(arr[arrayIndex] != 0) {
 arr[arrayIndex] = arr[i];
}
for( let i=0; i<arr.length; i++){
arr[arrayIndex] = 0;
}
return arr;
}

arrayIndex = 0; 
arr[0] = 1 



function moveZerostoRight(arr){
let arrayIndex = 0;
for ( let i=0; i< arr.length; i++){
  if(arr[i]!=0) {
    arr[arrayIndex] = arr[i]
    arrayIndex++;
  }
}
for( let i= arrayIndex; i< arr.length; i++){
    arr[i] = 0;
  }
return arr;
}
console.log(moveZerostoRight([1,0,2,3,1,0]));



Second Approach: 
#################
Time Complexity : O(n)
Space Complexity: O(1)
function moveZeros(arr){
let j = 0;
for(let i=0; i<arr.length; i++) {
  if(arr[i]!==0){
  // swapping the arrays here, this concept is called destructuring
    [arr[i], arr[j]] = [arr[j],arr[i]];
    j++;
  }
}
return arr;
}

moveZeros([1,0,2,3,1,0])

=========================================================================================

2. Palindrome :

Algorithm
1. let arr= [1,2,3,4]; 
2. reverse the copy of the arr and store it in reverseArray
    let reverseArray =[...arr].reverse() ; // [4,3,2,1] 
3. run for loop 
  for(let i=0; i< arr.length; i++){
    check if the arr element, arr[i] is not equal to reverseArray of element , reverseArray[i]
    return false , else true
      if(arr[i] !== reverseArray[i]) { 
      return false
      } else {
      true 
      }
      }

let arr = [1,2,3,4];
let rArr = [...arr].reverse();
for (let i=0; i < arr.length; i++;){
arr[i] != rArr[i] ? false: true; // using ternary 
} 

=========================================================================================
1. You are given an array of integers arr[]. Your task is to reverse the given array.

Algorithm:

function reverseArray(arr) {
        return [...arr.reverse()];
  reverseArray([4, 5, 2]);
  

Input: arr = [4, 5, 2]
Output: [2, 5, 4]


Input: arr = [1]
Output: [1]

===================================================================================
*/
