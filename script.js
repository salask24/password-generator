var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q"]
var uppercase = ["A","B","C", "D","E","F","G","H","I","J","K","L","M","N","O","P","Q"]
var num = [1,2,3,4,5,6,7,8,9,0]
var symbols = [":",";","$","/","#","(",")","%","?","<",">"]
var masterCharacters = [ ];


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var userInput = parseInt(prompt ("Select the length of your password."))
  if (userInput < 8 || userInput > 128 || userInput === null || userInput === "") {
    alert("Invalid input. Please choose a valid length between 8 to 128 characters.")
    return;
  }
  else {
    console.log("Great. That length works")
  }


//asking what they want in their password
  var selectLowercase = confirm("Would you like lowercase characters?") 
  var selectUppercase = confirm("Would you like upperercase characters?")
  var selectNumeric = confirm("Would you like a numeric characters?")
  var selectSymbols = confirm("Would you like special characters?")

  if(selectLowercase === false && selectUppercase === false && selectNumeric === false && selectSymbols === false) {
    alert("Please select one type of character.")
    return;
  }

//when they select an option they get a password with "that" character
  if(selectLowercase === true) {
    alert("You have selected lowercase characters.");
    masterCharacters.push (lowercase)
    console.log("master is" +masterCharacters)
  }
  else {
    alert("No lowercase")
  }

  if (selectUppercase) {
    alert("You have selected uppercase characters.");
    masterCharacters.push (uppercase)
    console.log("master is" +masterCharacters)
  }
  else{
    alert("No uppercase.")
  }
  if (selectNumeric) {
    alert("You have selected numeric characters.");
    masterCharacters.push (num)
    console.log("master is" +masterCharacters)
    
  }


  if (selectSymbols) {
    alert("You have selected special characters.");
    masterCharacters.push (symbols)
    console.log("master is" +masterCharacters)
    
  }

}


//verify if the password is valid
function verifyPassword() {
  var generatePassword = document.getElementById("password").value;

  if (generatePassword == "") {
    document.getElementById("message").innerHTML = "**Fill the password please!";
    return false;
  }
}

//display the password


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

