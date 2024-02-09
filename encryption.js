const alphabet = "abcdefghijklmnopqrstuvwxyz";
const encryptForm = document.getElementById("encryptForm");
const textToEncrypt = document.getElementById("textToEncrypt");
const shiftValue = document.getElementById('shiftValueEncrypt');
const encryptDiv = document.getElementById('encryptedResults');

//To encrypt each letter
function encryptLetter(letter, shift) {
  if (!alphabet.includes(letter)) {
    return letter;
  }
  const idx = alphabet.indexOf(letter.toLowerCase());
  const newIdx = (idx + shift) % alphabet.length;
  return alphabet[newIdx];
}

//Random character generator
function randomChar() {
  let randomIdx = Math.floor(Math.random() * alphabet.length);
  let randomChar = alphabet[randomIdx];
  return randomChar;
}

//Encrypt entire message
function encrypt(message, shift) {
  let encryptedMessage = "";
  for (let letter of message) {
    encryptedMessage += encryptLetter(letter, shift);
  }
  let encryptedNewMessage = "";
  for (let i = 0; i < encryptedMessage.length; i++) {
    if (i % 2 === 0 && i !== 0) {
      encryptedNewMessage += randomChar() + encryptedMessage[i];
    } else {
      encryptedNewMessage += encryptedMessage[i];
    }
  }
  return encryptedNewMessage;
}

encryptForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const encryptedMessage = encrypt(textToEncrypt.value, parseInt(shiftValue.value));
  const plainText = document.createElement('p');
  const encryptResults = document.createElement('p');
  plainText.innerText = `Original text is: ${textToEncrypt.value}`;
  encryptResults.innerText = `Encrypted text is: ${encryptedMessage}`;
  encryptDiv.appendChild(plainText);
  encryptDiv.appendChild(encryptResults);
  encryptForm.reset();
});
