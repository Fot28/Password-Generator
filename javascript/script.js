// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


// Function to prompt user for password options
function getPasswordOptions() {
  
  var characterOptions = {
    numbers: null,
    lowerCase: null,
    upperCase: null,
    specialChars: null
  }
  
  var passwordlength = prompt("How many characters would you like your password to contain?")
  while (passwordlength < 8 || passwordlength > 128){
    alert("Your password must contain at least 8 characters but no more than 128.")
    passwordlength = prompt("How many characters would you like your password to contain?")
  }
  
  characterOptions.numbers =  confirm("Would you like to use numbers?")
  characterOptions.lowerCase =  confirm("Would you like to use lowercase characters?")
  characterOptions.upperCase =  confirm("Would you like to use uppercase characters?")
  characterOptions.specialChars =  confirm("Would you like to use special characters?")
  while (!(characterOptions.numbers || characterOptions.lowerCase || characterOptions.upperCase || characterOptions.specialChars)){
    alert("You must use at least one of the following numbers, lowercase, uppercase orspecial characters to continue.")
    characterOptions.numbers =  confirm("Would you like to use numbers?")
    characterOptions.lowerCase =  confirm("Would you like to use lowercase characters?")
    characterOptions.upperCase =  confirm("Would you like to use uppercase characters?")
    characterOptions.specialChars =  confirm("Would you like to use special characters?")
  }
 
  return {characterOptions, passwordlength};
}

var options = getPasswordOptions();

// Function for getting a random element from an array
function getRandom(arr) {
  
}

// Function to generate password with user input
function generatePassword() {  
getPasswordOptions()
}



// Get references to the #generate element
var generateBtn = document.querySelector('#generate');


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);