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
  // Main variables
  //Password
  var generated = [""];
  // Array of password possibilities.
  var choose = [""];
  //Password length
  var length = window.prompt("What is your length of required password?(Choose a number between 8 to 128)");
    // Error Prompt
    if ((length < 8)||(length > 128)) {
       window.alert("Choose a number between 8 and 128");
       return null;
      }
    //Lowercase
  var lower = window.confirm("Would you like to include lowercase characters?");
    if (lower === true) {
      choose.push("a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
    }
    //Numbers
  var numbers = window.confirm("Would you like to include numbers?");
   if (numbers === true) {
    choose.push("1","2","3","4","5","6","7","8","9");
  }
  //Special Characters
  var special = window.confirm("Would you like to include symbols?");
   if (special === true) {
    choose.push("!","@","#","$","*");
  }
  //Uppercase
  var upper = window.confirm("Would you like to include uppercase characters?");
   if (upper === true) {
    choose.push("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
  }
  //If no characters in password?
  if ((!lower)&&(!numbers)&&(!special)&&(!upper)) {
    alert("Must choose at least one type!");
    return null;
  }
  //For loop to formulate the password
  for (var i = 0 ; i < length; i++) {
    generated += choose[Math.floor(Math.random() *choose.length)];
  }
  //Return password
  return generated;
}



// length of  up to 12 characters
//lowercase and uppercase
//numbers
// special characters