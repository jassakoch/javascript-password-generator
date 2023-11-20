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
5. Validate if one character type was selected.
 b. create object for storing user confirmations
4. Create array OR VAR for character types?
5. store character type input IN VAF
6. one character type selected for password
7. return password
*/

// array for lowercase 
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
console.log(lowercaseArray);
//array for uppercase
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
console.log(uppercaseArray);
//array for numeric
var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
console.log(numberArray);
var specialArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"]
console.log(specialArray);


function generatePassword() {
  //create var array for storing characters
  var possiblePasswordArray = [];
  //1. Prompt 1- lenght

  var lengthChoice = prompt("Choose a length between 8 and 128. Please enter a numeric value");

  // b.  confirming LengthChoice is between 8-128 but keeps going back if condition is not met.
  while (lengthChoice < 8 || lengthChoice > 128) {
    lengthChoice = prompt("You must choose a length between 8 and 128.");

    // if (lengthChoice >=8 || lengthChoice <=128){
    // break

  }
  console.log(lengthChoice);

  //alert for at least one characer choice
  window.alert("Please select at least ONE lowercase, or uppercase, or number or special character to include in your password");

  // prompt for user lowercase choice

  var lowercaseConfirm = confirm("Do you want to inlcude lowercase in your password?");
  //adding characters to possiblePassword if confirmed
  if (lowercaseConfirm) {
    possiblePasswordArray = possiblePasswordArray.concat(lowercaseArray);
  }
  //prompt for uppercaseChoice
  var uppercaseConfirm = confirm("Do you want to include uppercase in your password?");
  if (uppercaseConfirm) {
    possiblePasswordArray = possiblePasswordArray.concat(uppercaseArray);
  }
  //prompt for number choice
  var numberConfirm = confirm("Do you want to include numeric values in your password?");
  if (numberConfirm) {
    possiblePasswordArray = possiblePasswordArray.concat(numberArray);
  }
  //prompt for special characters choice
  var specialConfirm = confirm("Do you want to include special characters in your password?");
  if (specialConfirm) {
    possiblePasswordArray = possiblePasswordArray.concat(specialArray);
  }

  console.log(possiblePasswordArray);
  //Need to validate if at least one of the character choices was selected. 
  //First create an array to store the confirmations then 

  if (!lowercaseConfirm && !uppercaseConfirm && !numberConfirm && !specialConfirm) {
    window.alert("Please select at least ONE lowercase, or uppercase, or number or special character to include in your password");
    return generatePassword();
  } else {
    console.log(possiblePasswordArray);
    var passwordString = '';

    for (let index = 0; index < Number(lengthChoice); index++) {
      //to do list: each time of the loop I need to grab random number, random number needs to be between and possiblecharacters`
      //before randombly selecting character
   
      var randomIndex = Math.floor(Math.random() * possiblePasswordArray.length);
      passwordString += possiblePasswordArray[randomIndex];
      console.log(passwordString);
      //

    }
    return passwordString;
  }

}





