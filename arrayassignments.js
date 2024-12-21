function spOfArray(arr) {
  /*
  
    calculate sum & product(multiply) of all numbers in an array
    [4, 2, 7]
    Sum = 4 + 2 + 7
    Product = 4 * 2 * 7
  
    1. Declare & initialize
    2. run a loop
  
  
     */
  const initVal = 0;
  const sumWithInitial = arr.reduce(
    (acc, currentValue) => acc + currentValue + initVal
  );
  const productWithInitial = arr.reduce(
    (acc, currentValue) => acc * currentValue
  );

  return { sumWithInitial, productWithInitial };
}

console.log(spOfArray([4, 2, 7]));
// console.log(spOfArray([4, 2, 7, 1, 2, 5]));
// console.log(spOfArray([3, 2, -1, 8, 0, 2, 5]));

/*
  HW:
  WAF to calculate sum & product of all numbers in an array
  WAF to swap max & min number of an array.
  
  use Nested loop for now (later will be learning Hash table to solve this issue in a better way)
  WAF to print all the unique values in an array.
  Ex: [1,2,3,4,1,2,3]
  
  WAF to print intersection(common elements) of 2 arrays. 
  [1,2,3,4,5]
  [6,7,3,1]
  
  */
