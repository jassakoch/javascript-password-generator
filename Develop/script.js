// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//declaring generatePassword function
//finding method of limiting 9-128;
//loop for limiting charaters


//promt for choosing a number of the characters

var LengthChoice = prompt("Choose a length between 8 and 128.");

//choice of password length
/*
if (!LengthChoice >=8 || !LengthChoice <= 128); {
  alert("You must choose a length between 8 and 128!");
  window.open("index.htm");
} else {
  return LengthChoice;
}
/*

//prompt for character types, lowercase, uppcase, numeric, and/or special characters.

/*
function generatePassword(length, lowercase, uppercase, mumeric, special characters); {

}
*/

if (LengthChoice < 8 || LengthChoice > 128); {
  alert("You must choose a length between 8 and 128!");
  window.open("index.htm");
} else {
  return LengthChoice;
  
}