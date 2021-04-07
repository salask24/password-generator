var lowercase = ["a", "b", "c", "d"]
var uppercase = ["A", "B", "C", "D"]
var num = [1, 2, 3, 4, 5]
var symbols = [":", ";", "$", "/", "#"]

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var userInput = parseInt(prompt ("Select the length of your password"))
  if (userInput < 8 || userInput > 128 || userInput == null) {
    alert("Invalid input. Please choose a link between 8 to 128 characters.")
    return;
  }

  var selectLowercase = confirm("Would you like lowercase characters?") 
  var selectUppercase = confirm("Would you like upperercase characters?")
  var selectNumeric = confirm("Would you like a numeric characters?")
  var selectSymbols = confirm("Would you like special characters?")
  if(selectLowercase === false && selectUppercase === false && selectNumeric === false && selectSymbols === false) {
    alert("Please select one type of character.")
    return;
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
