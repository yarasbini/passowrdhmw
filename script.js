// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
function generate(){
  //set password length/complexity
  var complexity = document.getElementById("slider").value;

  //passwoed values 
  var values = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890!@#$%^&*()";
  var password = "";

  //create for loop

  for (var i=0; i== complexity; i++){
    password = password + values.chartAt(Math.floor(value.length-1));
  }
  // add password to textbox
  document.getElementById("display").value = password;

  //add password to previsouly 
  document.getElementById("lastName").innerHTML += password + "<br />"

}

//default length display
document.getElementById("length").innerHTML = "length 25";

//function
document.getElementById("slider").oniput = function(){

  if(document.getElementById("slider").value > 0){
    document.getElementById("length").innerHTML = "length: " + document.getElementById("slider").value;
  }
  else{
    document.getElementById("length").innerHTML = "length: 1";
  }
}

function copyPassworf(){
  document.getElementById("display").select();
  document.execCommand("copy");
  alert("password copied to clipboard");
}
