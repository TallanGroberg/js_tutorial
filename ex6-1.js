// let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];
// //
// function urlify(string) {
//   return string.toLowerCase().split(/\s+/).join("-");
// }
//
// function functionalMap(states) {
//   return states.map(state => urlify(state));
// }
//
// function fullAddress(states) {
//   return states.map(state => "https://example.com/"  + state);
// }
//
// console.log(functionalMap(states));
// console.log(fullAddress(functionalMap(states)));

// 6-2 execise

// function containsDakota(states) {
//   return states.filter(state => state.split(/\s+/).length === 2);
// }
//
// console.log(containsDakota(states));
//
// //written on my own
//
// function oneWord(states) {
//   return states.filter(state => state.split(/\s+/).length === 1);
// }
// console.log(oneWord(states));

// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function funcProduct(Array) {
//   return Array.reduce((total, n) => total *= n );
// }
// console.log(funcProduct(a
// ));
//
//
// function productredus(array) {
//   return array.reduce((total, n) => total *= n );
// }
// console.log(productredus(a));
// //
// function proDux(thing) {
//   return thing.reduce((total, n) => total *= n);
// }
// console.log(proDux(a));

//
// function functionLengths(states) {
//   return states.reduce((lengths, state) => {
//     lengths[state] = state.length;
//     return lengths; }, {});
// }
//
// console.log(functionLengths(states));
//
//
// function fucLengths(states) {
//   return states.reduce((lengths, state) => {
//     lengths[state] = state.length;
//     return lengths; }, {});
// }
//
// console.log(fucLengths(states));

// function Phrase(content) {
//   this.content = content;
//
//   this.louder = function() {
//     return this.content.toUpperCase();
//   }
// }



//
// function Phrase(content) {
//   this.content = content;
//
//   this.quite = function() {
//     return this.content.toLowerCase();
//   }
// }


// string.prototype.blank = function() {
//   return !!(this.match(/^\*$/g));
// }
//
// console.log("foobar".blank());        // false
// console.log("lkjlhg   ".blank());     // false
// console.log("   jhoabf   ".blank());  // false
// console.log("   fooboobar".blank());     // false
// console.log("".blank());              // true
// console.log(" ".blank());             // true
// console.log("\r".blank());            // true
// console.log("\n".blank());            // true
// console.log("\t".blank());            // true
// console.log("\f".blank());            // true
// console.log("\v".blank());            // true

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Array.prototype.last = function() {
  return this[this.length - 1];
}
console.log(a.last());
