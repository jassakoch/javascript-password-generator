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


//prompt for character types, lowercase, uppcase, numeric, and/or special characters.


function generatePassword() {
  console.log(Will I figure this out??)
}


if (LengthChoice < 8 || LengthChoice > 128); {
  alert("You must choose a length between 8 and 128!");
  window.open("index.htm");
} else {
  return LengthChoice;
  
}
*/

//function generatePassword(LengthChoice) {
  if (LengthChoice < 8 || LengthChoice > 128); {
    alert("You must choose a length between 8 and 128!");
    window.open("index.htm");
  } 
  else {

    return LengthChoice;
}

//3. to do list character type prompt
var characterType = window.prompt("Select at least one type of characters (lowercase, uppercase, numeric, and/or special characters");

/*to do list for generating function:
1. Prompt 1- lenght
2. Store length input
3. Prompt 2- character types
3. Create array for character types?
5. store character type input
6. one character type selected for password
7. return password
*/