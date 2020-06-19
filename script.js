// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(password) {

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function createPassword() {
  var criteria = promptCriteria();

  var password = generatePassword(criteria);

  writePassword(password);
}

function promptCriteria(){

  var passwordLength = 0;
  var specialCharacters = false;
  var lowercase = false;
  var uppercase = false;
  var numbers = false;

  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    // Ask user for the length of password using a 'prompt()'
    passwordLength = prompt("Password length: Please choose a number between 8 to 128 ")
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      alert("Please enter a number between 8 and 128");
      passwordLength = 0;
      continue;
    }
    else {
      passwordLength = parseInt(passwordLength)
    }
  };
  // Check to see if one of the above options was chosen, if not loop back
  while (!(specialCharacters || lowercase || uppercase || numbers)) {
    // Ask user if they want special characters using a 'confirm()'
    specialCharacters = confirm("Do you want special characters?");

    // Ask user if they want lowercase using a 'confirm()'
    lowercase = confirm("Do you want lowercase characters?");

    // Ask user if they want uppercase using a 'confirm()'
    uppercase = confirm("Do you want uppercase characters?");

    // Ask user if they want numbers using a 'confirm()'
    numbers = confirm("Do you want numbers?");

    if (!(specialCharacters || lowercase || uppercase || numbers)) {
      alert("Please select at least one special criteria");
      continue;
    }
  };
  var criteria = {
    passwordLength,
    specialCharacters,
    lowercase,
    uppercase,
    numbers,
  };
  return criteria;
};

function generatePassword(criteria) {
  var password = "";
  var acceptableCharacters = [];

// Add event listener to generate button
generateBtn.addEventListener("click", createPassword);