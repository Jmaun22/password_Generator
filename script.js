// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

  var pass = "dsafafas"
  const specialCharsList = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "+", "(", ")", "{", "}", "[", "]", "?", "/", ">", "<", ".", ",", "~", "|"];
  const numberCharsList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
​
  const uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
​
  const lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


  var length = prompt("The password must be at least 8 char long and no longer than 128 char.");
  alert("The character types in the password can include lowercase, uppercase, numeric and special characters.")
  var lowercase = prompt("Would you like lower case char type how many.");
  var uppercase = prompt("Would you like upper case char, type how many you want.");
  var numeric = prompt("Would you like numeric char, type how many you would like.")
  var specialChar= prompt("Would you like special characters, type how many you want.")

  var pass = 


  return pass


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", generatePassword);
