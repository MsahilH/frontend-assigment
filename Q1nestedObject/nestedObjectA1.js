// Approch 1 : Recursive Function Calling
function contains(nObj, value) {
  if (nObj === value) {
    return true;
  }
  if (typeof nObj === "object" && nObj !== null) {
    for (let key in nObj) {
      if (contains(nObj[key], value)) {
        return true;
      }
    }
  }
  return false;
}

// Time Complexity :
// Worst Case: O(n^d) // For worst Test case
// n=number of keys in the object d=levels of nested object

// Space Complexity:
// O(d) : d=levels of nested object : For recursive call

// var nestedObject = {
//   data: {
//     info: {
//       stuff: {
//         thing: {
//           moreStuff: {
//             magicNumber: 45,
//             something: "foo2",
//           },
//           morStuff: { magicNumber: 42, something: "foo1" },
//         },
//         thing: {
//           moreStuff: { magicNumber: 45, something: "foo2" },
//           morStuff: {
//             magicNumber: 44,
//             something: "foo1",
//           },
//         },
//       },
//     },
//   },
// };
// let hasIt = contains(nestedObject, 44);
// let doesntHaveIt = contains(nestedObject, "foo");
// console.log(hasIt); // Output: true console.log(doesntHaveIt); // Output: false
