/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

validatePIN("1234") === true
validatePIN("12345") === false
validatePIN("a234") === false
*/

function validatePIN (pin) {
  var pinLength = pin.length;
  var valid = false;
  if( (pinLength === 4) || (pinLength === 6) ) {
    for( var i = 0; i < pinLength; i++ )
      if (isNaN(pin[i])){
        return false;
      } else {
        valid = true;
      }
  }
  return valid; 
}

console.log( validatePIN("1234") );
