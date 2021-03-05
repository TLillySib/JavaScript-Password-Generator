// Assignment Code 
var generateBtn = document.querySelector("#generate");

//Arrays
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
	
var passwordLength;
var confirmLowercase;
var confirmUppercase;
var confirmNumbers;
var confirmSymbols;
var userChoices;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Begin Function
function generatePassword() {
//Ask users for input
passwordLength = prompt("How many characters would you like in your password? Choos between 8 and 128");
console.log("Password length" + passwordLength);

if (!passwordLength) {
  alert("Required value")
}

else if (passwordLength < 8 || passwordLength > 128){
passwordLength = prompt("you must choose between 8 and 128");
console.log("Password length" + passwordLength);

} else {
  confirmLowercase = confirm("Will this contain lower case letter?");
  console.log("Lower case" + confirmLowercase);

  confirmUppercase = confirm("Will this contain upper case letters");
  console.log("Upper case" + confirmUppercase);

  confirmNumbers = confirm("Will this contain numbers?");
  console.log("Number" + confirmNumbers);

  confirmSymbols = confirm("Will this contian symbols?");
  console.log("Symbols" + confirmSymbols);

};
//If there is no answer

// #4 True option
if (!confirmLowercase && !confirmUppercase && !confirmNumbers && !confirmSymbols) {
  userChoices = alert("You must choose a criteria");

} else if (confirmLowercase && confirmUppercase && confirmNumbers && confirmSymbols) {
  userChoices=lowerCase.concat(upperCase, numbers, symbols);
  console.log(userChoices);
}

// #3 True options
else if (confirmLowercase && confirmUppercase && confirmNumbers) {
  userChoices = lowerCase.concat(upperCase, numbers);
  console.log(userChoices);
}
else if (confirmLowercase && confirmUppercase && confirmSymbols) {
  userChoices = lowerCase.concat(upperCase, symbols);
  console.log(userChoices);
}
else if (confirmLowercase && confirmNumbers && confirmSymbols) {
  userChoices = lowerCase.concat(numbers, symbols);
  console.log(userChoices);
}
else if (confirmUppercase && confirmNumbers && confirmSymbols) {
  userChoices = upperCase.concat(numbers, special);
  console.log(userChoices);
}

// #2 True options

else if (confirmLowercase && confirmUppercase) {
  userChoices = lowerCase.concat(upperCase);
  console.log(userChoices);
}
else if (confirmLowercase && confirmNumbers) {
  userChoices = lowerCase.concat(numbers);
  console.log(userChoices);
}
else if (confirmLowercase && confirmSymbols) {
  userChoices = lowerCase.concat(symbols);
  console.log(userChoices);
}
else if (confirmUppercase && confirmNumbers) {
  userChoices = upperCase.concat(numbers);
  console.log(userChoices);
}
else if (confirmUppercase && confirmSymbols) {
  userChoices = upperCase.concat(symbols);
  console.log(userChoices);
}
else if (confirmNumbers && confirmSymbols) {
  userChoices = numbers.concat(symbols);
  console.log(userChoices);
}

// #1 True options

else if (confirmLowercase) {
  userChoices = lowerCase;
  console.log(userChoices);
}
else if (confirmUppercase) {
  userChoices = upperCase;
  console.log(userChoices);
}
else if (confirmNumbers) {
  userChoices = numbers;
  console.log(userChoices);
}
else if (confirmSymbols) {
  userChoices = symbols;
  console.log(userChoices);
};

//Empty string to fill--from loop selecting random characters from array
var randomPassword =""

// Loop for random selection
for (var i=0; i < passwordLength; i++) {
  var randomPassword = randomPassword + userChoices[Math.floor(Math.random()*userChoices.length)];
  console.log(randomPassword);
} 
  return randomPassword;
}