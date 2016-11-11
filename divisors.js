/*
Create a function named divisors that takes an integer and returns an array with all of the integer's divisors(except for 1 and the number itself). If the number is prime return the string '(integer) is prime' (use Either String a in Haskell).

divisors(12); //should return [2,3,4,6]
divisors(25); //should return [5]
divisors(13); //should return "13 is prime"
https://www.codewars.com/kata/544aed4c4a30184e960010f4/solutions/javascript
*/

const divisors = ( number ) => {
  const output = [];
  for( let i = 2; i < number; i++ ){
    if (number % i === 0) { output.push(i) };
  }
  return output.length ? output : `${number} is prime`;
}

console.log( divisors(12) );
