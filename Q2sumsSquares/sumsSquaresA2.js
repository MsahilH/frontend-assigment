// Approch 2 : Using Recursive call functionality
function SumSquares(arr) {
  let sum = 0;
  function sumSquaresRecursive(arr) {
    for (let element of arr) {
      if (Array.isArray(element)) {
        sumSquaresRecursive(element);
      } else if (typeof element === "number") {
        sum += element * element;
      }
    }
  }
  sumSquaresRecursive(arr);
  return sum;
}


// Time Complexity :
// Worst Case : O(n*d) ;
// n = Total number of element present in array d = Maximum depth of the array

// Space Complexity:
// O(d) : d = Maximum depth of the nested array

// l = [10,[[10]]]]]]]]]],10],[10]]
// console.log(SumSquares(l)); // 100 + 100 + 100 + 100 = 400
