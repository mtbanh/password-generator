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
}

// Add event listener to generate button
generateBtn.addEventListener("click", createPassword);