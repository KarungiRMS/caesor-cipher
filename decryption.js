const decryptForm = document.getElementById("decryptForm");
const textToDecrypt = document.getElementById("textToDecrypt");
const decryptDiv = document.getElementById('decryptedResults');
const shiftValueDecrypt = document.getElementById('shiftValueDecrypt');

//Decrypt each character
function decryptLetter(letter, shift){
  if (!alphabet.includes(letter)){
      return letter;
  }
  const idx = alphabet.indexOf(letter.toLowerCase());
  let newIdx = (idx - shift + alphabet.length) % alphabet.length;
  if (newIdx < 0) newIdx = (newIdx + alphabet.length) % alphabet.length;
  return alphabet[newIdx];

}

//Decrypt entire message 
function decrypt (encryptedNewMessage, shift)
{
  let decryptedWord = "";
  for (let letter of encryptedNewMessage){
      decryptedWord += decryptLetter(letter,shift);
  }
  let decryptedNewMessage = "";
  let counter = 0;
  for (let i = 0; i <decryptedWord.length; i++){
      if (counter == 2){
          counter =0;
      }
      else{
          decryptedNewMessage += decryptedWord[i];
          counter++;
      }
  }
  console.log(decryptedNewMessage);
  return decryptedNewMessage;
}


decryptForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const encryptedMessage = decrypt(textToDecrypt.value, parseInt(shiftValueDecrypt.value));
  const plainText = document.createElement('p');
  const decryptResults = document.createElement('p');
  plainText.innerText = `Original(Encrypted Text) text is: ${textToDecrypt.value}`;
  decryptResults.innerText = `Decrypted text is: ${encryptedMessage}`;
  decryptDiv.appendChild(plainText);
  decryptDiv.appendChild(decryptResults);
  decryptForm.reset();
});
