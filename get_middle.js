/*
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

Kata.getMiddle("test") should return "es"

Kata.getMiddle("persephones") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"

*/

function getMiddle(s) {
  var stringLength = s.length;
  var middle = '';
  if( stringLength % 2 === 0 ) {
    middle = s.slice( (stringLength/2) - 1, (stringLength/2) + 1  );
  } else {
    var middleIndex = (stringLength - 1)/2;
    middle = s[middleIndex];
  }
  return middle;
}


console.log(getMiddle("test"));
