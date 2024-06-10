// Approch 2 : Stringify the entire object
function contains(nObj, value) {
  const objString = JSON.stringify(nObj);
  return objString.includes(JSON.stringify(value));
}

// Time Complexity :
// Worst Case: O(n + m)
// n=total number of elements object
// m=length of the stringified value Space Complexity ;
// O(n): Increase length of string linearly with size of object


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
