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
  
  // Ask user User to insert a valid password length and alert him of the conditions
  var passwordlength = prompt("How many characters would you like your password to contain?")
  while (passwordlength < 8 || passwordlength > 128 || isNaN(passwordlength) ){
    alert("Your password must contain at least 8 characters but no more than 128 and your input must be number.")
    passwordlength = prompt("How many characters would you like your password to contain?")
  }
  // Ask user User which characters need to be included in the password 
  // and alert him in case he don't choose any
  var charArray = []
  while (!charArray.length) {
    if (confirm("Would you like to use numbers?")) charArray.push(numericCharacters);
    if (confirm("Would you like to use lowercase characters?")) charArray.push(lowerCasedCharacters);
    if (confirm("Would you like to use uppercase characters?")) charArray.push(upperCasedCharacters);
    if (confirm("Would you like to use special characters?")) charArray.push(specialCharacters);
    if (!charArray.length) alert("You must use at least one of the following numbers, lowercase, uppercase or special characters to continue.");
  }
  
  // Return password options values
  return {charArray, passwordlength};
}


// Function for getting a random element from an array
function getRandom() {
  var passwordOptions = getPasswordOptions();
  var charArray = passwordOptions.charArray;
  var passwordLength = passwordOptions.passwordlength;
  var password = '';

  // Select at least one character from each selected array
  for (var i = 0; i < charArray.length; i++) {
    password += charArray[i][Math.floor(Math.random() * charArray[i].length)];
  }
  
  // Select remaining characters randomly from all selected arrays
  for (var i = password.length; i < passwordLength; i++) {
    var selectedArray = charArray[Math.floor(Math.random() * charArray.length)];
    password += selectedArray[Math.floor(Math.random() * selectedArray.length)];
  }
  
  // Return password
  return password 
}
    
// Function to generate password with user input
function generatePassword() {  

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