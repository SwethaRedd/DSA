/*
Task: 

Merge 'nums1' and 'nums2' into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be sorted inside the array 'nums1'.
To accommodate this, 'num1' has a length of 'm+n', where the first 'm' elementts denote the elements that should be merged. and the last 'n' elements are set to '0' and should be ignored. 'nums2' has a length of 'n'

Algo: 

num1 = [0,4,5,0,0], m=3 m-elements, p1 = m-1 (index)
num2 = [1,2], n=2, n-elements, p2 = n-1 (index)
(num1+num2) index = p = (total size - 1) = (m+n) -1  (index)

1. declare the indexes for p1,p2,p
2. run while loop
        p1 & p2 elements indexes should be greater than 0.
        while (p1 > 0 && p2 > 0){
        compare elements of num1 and num2 & find the largest element and put it in 'num1[p]'
        decrease indexes p1-- ; p--
        if the while condition fails then go to else 
        nums1[p] = nums2[p2]
        decrease indexes p2 --; p-- 

*/
// function mergeArrays(nums1, nums2) {
let m = 3;
let n = 2;
let p = m + n - 1;
let p1 = m - 1;
let p2 = n - 1;

while (p1 >= 0 && p2 >= 0) {
  if (nums1[p1] > nums2[p2]) {
    nums1[p] = nums1[p1];
    p1--;
  } else {
    nums1[p] = nums2[p2];
    p2--;
  }
  p--;
}
while (p2 >= 0) {
  nums1[p] = nums2[p2];
  p--;
  p2--;
}
// }
// mergeArrays([3, 4, 1, 0, 0], [5, 6]);
