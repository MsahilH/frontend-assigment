// Approch 1 : Using array.flat() functionality
function SumSquares(arr) {
  const completelyFlattenedArray = arr.flat(Infinity);
  const sumOfSquares = completelyFlattenedArray.reduce(
    (sum, value) => sum + value ** 2,
    0
  );
  return sumOfSquares;
}
// Time Complexity :
// Worst Case : O(n+m)
// n = total number of elements in input array
// m = total number of elements after flat for reduce function 

//Space Complecity :
// O(n) : n=length of flated array

// l = [10,[[10]]]]]]]]]],10],[10]]
// console.log(SumSquares(l)); // 100 + 100 + 100 + 100 = 400