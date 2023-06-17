const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","{","}","]",",","|",":",";","<",">",".","?",
"/"];

// traigo el espacio en blanco de HTML de contraseña 1
const password1Div = document.getElementById("password1");
// traigo el espacio en blanco de HTML de contraseña 2
const password2Div = document.getElementById("password2");


// hago variable con lmite de carácteres que va a ser 15
const charLimit = 15;


function generatePassword() {
 // declaro variables
  let currentPassword = "";
  let randomNumber;


  for ( let i = 0; i < charLimit; i++ ) {
    //Devino var con cuenta(math random)
      randomNumber = Math.floor(Math.random() * characters.length);

      // defino var con cuenta de caracteres y random number
      currentPassword += characters[randomNumber];
  }
// que me devuelva entones el resultado de la variable
  return currentPassword;

 
}
// esta función ya colocada en HTML se la asocia con la creada de aquí.

function grabRandomPasswords() {
  password1Div.textContent = generatePassword();
  password2Div.textContent = generatePassword();
}



