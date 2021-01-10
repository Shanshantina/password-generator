// create arrays
var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var specialChar = ['!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[',']','^','_','`','{','}','|','~'];

// password criteria
var passwordOptions = function() {
  // password length at least 8 characters and no more than 128 characters
  var length = parseInt(
    prompt("How many characters you would like for your password?")
  );

  // password lenght conditions
  if (isNaN(length) === true || length < 8 || length > 128) {
    alert("Password length conditions:" + "\n" + "No.1: must be provided as a number."
    + "\n" + "No.2: must be more than 8 characters or less than 128 characters.");
    return alert("Please click the button again and input a number within the conditions.");
  }

  // password criteria lower case, uppercase, numeric, and special characters
  var lowerPass = confirm(
    "Click 'OK' to include lowercase characters."
  );
  var upperPass = confirm(
    "Click 'OK' to include uppercase characters."
  );
  var numberPass = confirm(
    "Click 'OK' to include numeric characters."
  );
  var specialPass = confirm(
    "Click 'OK' to include special characters."
  );

  // each prompt need to input at least one character type
  if (
    lowerPass === false &&
    upperPass === false &&
    numberPass === false &&
    specialPass === false
  ) {
    alert("You must select at least one charater type.");
    return alert("Please click the button again and select at least one charater type.");    
  }

  // remember the input password options
  var selectOptions = {
    length: length,
    lowerPass: lowerPass,
    upperPass: upperPass,
    numberPass: numberPass,
    specialPass: specialPass
  };
  return selectOptions;
};

// generate random characters from array
function randomPass(arr) {
  var random = Math.floor(Math.random() * arr.length);
  var randomOutput = arr[random];
  return randomOutput;
};

// generate new password
function generatePassword() {
  var options = passwordOptions();  
  var selectPass = [];
  var guaranteedPass = [];

  if (options.lowerPass) {
    selectPass = selectPass.concat(lower);
    guaranteedPass.push(randomPass(lower));
  }
  if (options.upperPass) {
    selectPass = selectPass.concat(upper);
    guaranteedPass.push(randomPass(upper));
  }
  if (options.numberPass) {
    selectPass = selectPass.concat(numeric);
    guaranteedPass.push(randomPass(numeric));
  }
  if (options.specialPass) {
    selectPass = selectPass.concat(specialChar);
    guaranteedPass.push(randomPass(specialChar));
  }

  // get the final result
  var result = [];
  for (var i=0; i<options.length; i++) {
    result.push(randomPass(selectPass));
  }
  for (var i=0; i<guaranteedPass.length; i++) {
    result[i]=guaranteedPass[i];
  }
  return result.join('');
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