//click button to generate password
//presented with prompts for password criteria
//user selects which criteria to include
//length 8-128 characters
//confirm whether to include lowercase, uppercase, numbers, special characters
//input should be validated and at least one character type has to be selected
//when all prompts are answered, a password is generated
//password is either displayed in the alert or written to the page

let specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// Assignment code here
function generatePassword() {
  let pot = []
  let length = parseInt(prompt("How many characters do you want for password"))
  if (length < 8 || length > 128) {
    return alert("Password must be between 8 and 128 characters")
  }
  let shouldIncludeSpecialChar = confirm("Would you like to include special characters");
  let shouldIncludeUpperCase = confirm("Would you like to include uppercase");
  let shouldIncludeLowerCase = confirm("Would you like to include lowercase");
  let shouldIncludeNumber = confirm("Would you like to include numbers");
  if (
    shouldIncludeLowerCase === false &&
    shouldIncludeNumber === false &&
    shouldIncludeSpecialChar === false &&
    shouldIncludeUpperCase === false
  ) {
    return alert("Must include at least one character type")
  }
  //what to select and put into pot (need help with this structure) 
  if (shouldIncludeSpecialChar === true); {
    pot = pot.concat(specialChar);
    (shouldIncludeLowerCase === true);
    pot = pot.concat(lowerCase);
    (shouldIncludeNumber === true);
    pot = pot.concat(numbers);
    (shouldIncludeUpperCase === true);
    pot = pot.concat(upperCase);
  }
  return password = generatePassword (length, lowerCase, upperCase, specialChar, numbers)
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
