// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

  var total_list = []
  const specialCharsList = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "+", "(", ")", "{", "}", "[", "]", "?", "/", ">", "<", ".", ",", "~", "|"];
  const numberCharsList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  const lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  let length = prompt("The password must be at least 8 char long and no longer than 128 char.");
  console.log(length);

  alert("The character types in the password can include lowercase, uppercase, numeric and special characters.");

 


if(length == NaN){
  alert("Please enter how long you would like your password to be.");
  return "try agian";
}  

if(length < 8){
  alert("Sorry your password is to short need to be longer and 8.");
  return "try agian";
}
if(length > 128){
  alert("Sorry your password is too long");
  return "try agian";
}
 
    
if(confirm("Would you like lower case chars in your password?") == true){
  
  total_list = total_list.concat(lowercaseList)
  console.log("total list" + total_list);
  
  // return total_list;
} 
  
  if(confirm("Would you like upper case chars in your password?") == true){
    total_list = total_list.concat(uppercaseList)
    console.log("total list" + total_list);
    // return total_list
  } 



 if(confirm("Would you like numeric chars in your password?") == true){
    total_list = total_list.concat(numberCharsList)
    console.log("total list" + total_list);
    // return total_list
  } 
  
  if (confirm("Would you like special characters in your password?") == true){
    total_list = total_list.concat(specialCharsList)
    console.log("total list" + total_list);
    // return total_list
  } 



  var list = []

  for (let i = 0; i < length; i++) {
  
    var ran = getRandomInt(total_list.length)
  

  var a = total_list[Math.floor(Math.random() * ran)];


  
    

    list.push(a);


   
  
  }
  
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }





  return list;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// generateBtn.addEventListener("click", generatePassword);
