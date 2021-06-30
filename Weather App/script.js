const inputLength = document.getElementById("password-length-input");
const checkBoxes = document.querySelectorAll("input[type=checkbox]");
const generateButton = document.getElementById("generate");
const copyButton = document.getElementById("copy-button");
const result = document.querySelector(".result");

generateButton.addEventListener("click", (e) => {
  let accessIndex = 0;
  let checkedBox = [];
  let generatedPassword = "";

  checkBoxes.forEach((el) => {
    if (el.checked) {
      checkedBox.push(el.getAttribute("data-raw"));
    }
  });

  for (let index = 0; index < inputLength.value; index++) {
    if (checkedBox.length > 0) {
      if (accessIndex > checkedBox.length - 1) {
        accessIndex = 0;
      }
      generatedPassword += generatePassword(checkedBox, accessIndex);
      accessIndex++;
    }
  }

  result.textContent = generatedPassword;
});

copyButton.addEventListener("click", (e) => {
  if (result.textContent !== "") {
    let textArea = document.createElement("textarea");
    textArea.value = result.textContent;
    document.body.appendChild(textArea);
    textArea.select();

    document.execCommand("copy");
    textArea.remove();

    alert("Password copied to clipboard");
  }
});

function generatePassword(array, index) {
  return array[index][Math.floor(Math.random() * array[index].length)];
}
