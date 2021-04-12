var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h","i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s","t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H","I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S","T", "U", "V", "W", "X", "Y", "Z"];
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var symbols = [":", ";", "$", "/", "#", "(", ")", "%", "?", "<", ">","~","`","_","-","=","+","@"];
var masterCharacters = [];
var passwordText = document.querySelector("#password");

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {

  var userInput = parseInt(prompt("Select the length of your password."))
  if (userInput < 8 || userInput > 128 || userInput === null || userInput === "") {
    alert("Invalid input. Please choose a valid length between 8 to 128 characters.")
    return "";
  }
  

  //asking what they want in their password
  var selectLowercase = confirm("Would you like lowercase characters?")
  var selectUppercase = confirm("Would you like upperercase characters?")
  var selectNumeric = confirm("Would you like a numeric characters?")
  var selectSymbols = confirm("Would you like special characters?")

  while (selectLowercase === false && selectUppercase === false && selectNumeric === false && selectSymbols === false) {
    alert("Please select one type of character.")
    selectLowercase = confirm("Would you like lowercase characters?")
    selectUppercase = confirm("Would you like upperercase characters?")
    selectNumeric = confirm("Would you like a numeric characters?")
    selectSymbols = confirm("Would you like special characters?")
  }

  //true or false with selecting 
  if (selectLowercase) {
    masterCharacters.push(lowercase)
  }

  //uppercase
  if (selectUppercase) {
    masterCharacters.push(uppercase)
  }

  //numbers
  if (selectNumeric) {
    masterCharacters.push(num)
  }

  //symbols
  if (selectSymbols) {
    masterCharacters.push(symbols)
  }

  var password = "";

  for (i = 0; i < userInput; i++) {

    var randomArr = masterCharacters[Math.floor(Math.random() * masterCharacters.length)];
    var randomChar = randomArr[Math.floor(Math.random() * randomArr.length)];
    password += randomChar;

  }
  return password;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

