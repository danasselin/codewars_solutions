/*
The goal of this exercise is to convert a string to a new string where each character in the new string is '(' if that character appears only once in the original string, or ')' if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples:

"din" => "((("

"recede" => "()()()"

"Success" => ")())())"

"(( @" => "))(("
*/

const duplicateEncode = (word) => {
  let wordCount = {},
      output = '',
      wordToLower = word.toLowerCase();
  for( let i in wordToLower ) {
    wordCount[wordToLower[i]] >= 1 ?
    wordCount[wordToLower[i]] += 1 :
    wordCount[wordToLower[i]] = 1;
  }
  for( let i in wordToLower ) {
    wordCount[wordToLower[i]] > 1 ? output += ")" : output += "(";
  }
  return output;
}

console.log(duplicateEncode("(( @"));

// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/solutions/javascript
