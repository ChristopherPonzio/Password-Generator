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

function generatePassword() {
  var generated = [""];
  var choose = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var length = window.prompt("How many Characters?(Between 8 to 128)");

  var numbers = window.confirm("Would you like to include numbers?");
  if (numbers === true) {
    choose.push("1","2","3","4","5","6","7","8","9");
  }
  var special = window.confirm("Would you like to include symbols?");
  if (special === true) {
    choose.push("!","@","#","$","*");
  }
  var uppercase = window.confirm("Would you like to include uppercase characters?");
  if (uppercase === true) {
    choose.push("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
  }
  for (var i = 0 ; i < length; i++) {
    generated += choose[Math.floor(Math.random() *choose.length)];
  }
  return generated;
}



// length of  up to 12 characters
//lowercase and uppercase
//numbers
// special characters