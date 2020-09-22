// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//arrays
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","X","y","z"  ]
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var number = [0,1,2,3,4,5,6,7,8,9];
var symbols = ["!","~","@","#","$","%","^","&","*","<",">","/","-"]


// Write password to the #password input
function writePassword() {
  var password = generatePassword();{}
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword () {

//randomizing password
var password = "";
var char_pool = []

//user responses
var lowerInput= confirm ("Would you like lower case characters?");
var upperInput= confirm ("Would you like Upper Case characters?");
var numberInput= confirm ("Would you like numbers?");
var symbolInput= confirm ("Would you like symbols?");
var userLength = parseInt(prompt("How many characters should the password have?", "1"), 10);

  //User criterias
  function useLowerCase () {
    return lowerCase [Math.floor(Math.random() * lowerCase.length)]
  }
    function useUpperCase () {
      return upperCase [Math.floor(Math.random() * upperCase.length)]
    }
  
    function useNumber () {
      return number [Math.floor(Math.random() * number.length)]
    }
    
    function useSymbols () {
      return symbols [Math.floor(Math.random() * symbols.length)]
    } 

  if (upperInput) {
    password += useUpperCase();
    char_pool.concat(upperCase);
   }
  
  if (lowerInput) {
    password += useLowerCase();
    char_pool.concat(lowerCase);
   }

  if (numberInput) {
    password += useNumber();
    char_pool.concat(number);
   }
  
  if (symbolInput) {
    password += useSymbols();
    char_pool.concat(symbols);
   }
  
  else {
   alert('Please indicate preference');
  }

  //password generation of randomized characters
  while (password.length < userLength) {
    password += useUpperCase();
    char_pool.concat(upperCase);
    password += useSymbols();
    char_pool.concat(symbols);
    password += useNumber();
    char_pool.concat(number);
    password += useLowerCase();
    char_pool.concat(lowerCase);
   }
   console.log (password);
    return password;
  }

 

