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


/*to do list for generating function:
1. Prompt 1- lenght
2. Store length input IN A VAR
3. Prompt 2- character types
  a. lowercase
  b. uppercase
  c. numeric
  d. special characters
4. Create array OR VAR for character types?
5. store character type input IN VAF
6. one character type selected for password
7. return password
*/




function generatePassword() {
  //1. Prompt 1- lenght
  var lengthChoice = prompt("Choose a length between 8 and 128.");

  // b.  confirming LengthChoice is between 8-128
  if (lengthChoice < 8 || lengthChoice > 128) {
    alert("You must choose a length between 8 and 128!");
    return
  }
// prompt for their character type choice
var charTypeChoice = confirm("Do you want to inlcude lowercase?");
// declaring lowercase variable
//check if their choice is yes or no


}
//check if choice is yes?
if (confirm (charTypeChoice))  {
  var charTypeChoice = confirm("Do you want to inlcude lowercase?");
  return var lowerCaseArray = 'abcdefghijklmnopqurstuvwxyz'.split
}
var 