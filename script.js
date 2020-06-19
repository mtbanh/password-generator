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

function promptCriteria() {

  var passwordLength = 0;
  var specialCharacters = false;
  var lowercase = false;
  var uppercase = false;
  var numbers = false;

  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {

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

  while (!(specialCharacters || lowercase || uppercase || numbers)) {

    specialCharacters = confirm("Do you want special characters?");


    lowercase = confirm("Do you want lowercase characters?");


    uppercase = confirm("Do you want uppercase characters?");


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

  if (criteria.specialCharacters) {
    acceptableCharacters = acceptableCharacters.concat(["!", "@", "#", "$", "%", "^", "&", "*"])
  }

  if (criteria.lowercase) {

    acceptableCharacters = acceptableCharacters.concat('abcdefghijklmnopqrstuvwxyz'.split(''));
  }

  if (criteria.uppercase) {

    acceptableCharacters = acceptableCharacters.concat('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''))

  }

  if (criteria.numbers) {

    acceptableCharacters = acceptableCharacters.concat(["1", "2", "3", "4", "5", "6", "7", "8", "9"])
  }
  for (var i = 0; i < criteria.passwordLength; i++) {

    password = password + acceptableCharacters[Math.floor(Math.random() * acceptableCharacters.length)];

  }

  return password
};

  generateBtn.addEventListener("click", createPassword);