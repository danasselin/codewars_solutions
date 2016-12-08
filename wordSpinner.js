/*
12/8 https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

Description:
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.


Examples:
spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
spinWords( "This is a test") => returns "This is a test"
spinWords( "This is another test" )=> returns "This is rehtona test"
*/

// es5
  function spinWords(word){
    function reverse(str){
      return str.split('').reverse().join('');
    }
    return word.split(' ').map(function(word){
      return word.length >= 5 ? reverse(word) : word;
    }).join(' ');
  }

// es6
const spinWords = (word) => {
  const reverse = (str) => str.split('').reverse().join('');
  return word.split(' ').map((word) => {
    return word.length >= 5 ? reverse(word) : word
  }).join(' ');
}
