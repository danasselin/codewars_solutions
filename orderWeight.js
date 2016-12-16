/*

https://www.codewars.com/kata/55c6126177c9441a570000cc/train/javascript
My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.

I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99. Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

Example:

"56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: "100 180 90 56 65 74 68 86 99"

When two numbers have the same "weight", let us class them as if they were strings and not numbers: 100 is before 180 because its "weight" (1) is less than the one of 180 (9) and 180 is before 90 since, having the same "weight" (9) it comes before as a string.

All numbers in the list are positive numbers and the list can be empty.
*/

// es5 implementation

function orderWeight(string){
  function calculateWeight(str){
    return str.split("")
              .map(function(el){ return parseInt(el) })
              .reduce(function(sum, n){ return sum += n });
  }
  return string.split(" ").sort(function(a, b){
    if( calculateWeight(a) === calculateWeight(b) ) {
      if (a > b){
        return 1;
      } else if (b > a){
        return -1;
      } else {
        return 0;
      }
    }
    return (calculateWeight(a) > calculateWeight(b)) ? 1 : -1;
  }).join(" ");
}

// es6 implementation

const orderWeight = (string) => {
  const calculateWeight = (str) => {
    return str.split("").map(el => parseInt(el)).reduce((sum, n) => sum += n);
  }
  return string.split(" ").sort((a, b) => {
    if( calculateWeight(a) === calculateWeight(b) ) {
      if (a > b){
        return 1;
      } else if (b > a){
        return -1;
      } else {
        return 0;
      }
    }
    return (calculateWeight(a) > calculateWeight(b)) ? 1 : -1;
  }).join(" ");
}

console.log(orderWeight("56 65 74 100 99 68 86 180 90"))
console.log(orderWeight("103 123 4444 99 2000"))
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"))
