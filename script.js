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
  const uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  const lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


  var length = prompt("The password must be at least 8 char long and no longer than 128 char.");
  alert("The character types in the password can include lowercase, uppercase, numeric and special characters.")
  var lowercase = prompt("Would you like lower case char type how many.");
  var uppercase = prompt("Would you like upper case char, type how many you want.");
  var numeric = prompt("Would you like numeric char, type how many you would like.");
  var specialChar= prompt("Would you like special characters, type how many you want.");


  // var ranLower = lowercaseList[Math.floor(Math.random()*lowercaseList.length)];
  // var ranUpper = uppercaseList[Math.floor(Math.random()*uppercaseList.length)];
  // var ranNum = numberCharsList[Math.floor(Math.random()*numberCharsList.length)];
  // var ranSpecial = specialCharsList[Math.floor(Math.random()*specialCharsList.length)];
 
  var pass = ${ranLower = makelower(lowercase)} + ${ranUpper = makeupper(uppercase)} + ${ranNum = makenum(numeric)} + ${anSpecial = makespecial(specialChar)} ;

  function makelower(lowercase) {
    var ranLower = '';

    for (var i = 0; i < lowercase; i++) {
      ranLower += lowercaseList.charAt(Math.floor(Math.random() * lowercaseList.length ));
    }
    return ranLower
  }

  function makeupper(uppercase) {
    var ranUpper = '';

    for (var i = 0; i < uppercase; i++) {
      ranUpper += uppercaseList.charAt(Math.floor(Math.random() * uppercaseList.length ));
    }
    return ranUpper
  }


  function makenum(numeric) {
    var ranNum = '';
   
    for (var i = 0; i < numeric; i++ ) {
      ranNum += numberCharsList.charAt(Math.floor(Math.random() * 
 numberCharsList.length));
   }
   return ranNum;
}

function makespecial(specialChar) {
  var ranSpecial = '';

  for (var i = 0; i < specialChar; i++) {
    ranSpecial += specialCharsList.charAt(Math.floor(Math.random() * specialCharsList.length ));
  }
  return ranSpecial
}




  return pass


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", generatePassword);
