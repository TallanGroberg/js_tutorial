let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];
//
// // urls = Imperative version
// function imperativeUrls(elements) {
//   let urls = [];
//   elements.forEach(function(element) {
//     urls.push(element.toLowerCase().split(/\s+/).join("-"));
//   });
//   return urls;
// }
// console.log(imperativeUrls(states));
//
// // Returns a URL-friendly version of a string.
// //   Example: "North Dakota" -> "north-dakota"
// function urlify(string) {
//   return string.toLowerCase().split(/\s+/).join("-");
// }
//
// // urls: Functional version
// function functionalUrls(elements) {
//   return elements.map(element =>
//   element.toLowerCase().split(/\s+/).join("-"));
// }
//
// functionalFullAddress(states)
// console.log(functionalUrls(states));
//
//


// function imperativeSingles(elements) {
//   let singles = [];
//   elements.forEach(function(element) {
//     if (element.split(/\s+/).length === 1) {
//       singles.push(element);
//     }
//   });
//   return singles;
// }
// console.log(imperativeSingles(states));
//
// //functional version
//
// function functionalSingles(elements) {
//   return elements.filter(element => element.split(/\s+/).length === 1);
// }
// console.log(functionalSingles(states));

// reduce function practice
//imperative version

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function imperativeSum(elements) {
  let total = 0;
  elements.forEach(function(n) {
    total *= n;
    // let newTotal = total += n;

  });
  return total;
}
console.log(imperativeSum(numbers));

// reduced solution




function functionalSum(elements) {
  return elements.reduce((total, n) => { return total += n;});
}

console.log(functionalSum(numbers));

function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach(function(element) {
    lengths[element] = element.length;
  });
  return lengths;
}
console.log(imperativeLengths(states));

function funcReduce(elements) {
  return elements.reduce((lengths, element) => {
    lengths[element] = element.length;
    return lengths;

  }, {});
}
console.log(funcReduce(states));
