const slider = document.querySelector(".slider");
const length = document.querySelector(".length");

const includeUppercase = document.querySelector("#upper");
const includeLowercase = document.querySelector("#lower");
const includenumbers = document.querySelector("#numbers");
const includeSymbols = document.querySelector("#symbols");

const generateButton = document.querySelector(".btn-generate");
const passwordDisplay = document.querySelector(".password");
const copyButton = document.querySelector(".password-copy");

slider.addEventListener("input", () => {
  length.textContent = slider.value;
});

const characters = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVXYZ",
  lowercase: "abcdefghijklmnopqrstuvxyz",
  numbers: "0123456789",
  symbols: "!@#$%&*()_+[]{};:.<>,?",
};

const createPassword = (options) => {
  let charset = "";

  if (options.uppercase) {
    charset += characters.uppercase;
  }

  if (options.lowercase) {
    charset += characters.lowercase;
  }

  if (options.numbers) {
    charset += characters.numbers;
  }

  if (options.symbols) {
    charset += characters.symbols;
  }

  if (charset.length === 0) {
    alert("Please select at least one character type");
    return "";
  }

  let password = "";
  for (let i = 0; i < options.length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }
  return password;
};

generateButton.addEventListener("click", () => {
  const passwordOptions = {
    length: slider.value,
    uppercase: includeUppercase.checked,
    lowercase: includeLowercase.checked,
    numbers: includenumbers.checked,
    symbols: includenumbers.checked,
  };

  const password = createPassword(passwordOptions);
  passwordDisplay.textContent = password;
});




copyButton.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const password = passwordDisplay.textContent;
  
    if (!password) {
      return;
    }
  
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password copied to clipboard");
  });