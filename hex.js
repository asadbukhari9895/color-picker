const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexcolor = "#";

  for (let i = 0; i < 6; i++) {
    hexcolor += hex[randonNumber()];
  }

  document.body.style.backgroundColor = hexcolor;
  color.textContent = hexcolor;
});

function randonNumber() {
  console.log(Math.floor(Math.random() * hex.length));
  return Math.floor(Math.random() * hex.length);
}

function copyCode() {
  // Get the text content of the span
  var codeToCopy = document.querySelector(".color").innerText;

  // Create a temporary input element to copy the text
  var tempInput = document.createElement("input");
  tempInput.value = codeToCopy;
  document.body.appendChild(tempInput);

  // Select the text inside the input
  tempInput.select();
  tempInput.setSelectionRange(0, 99999); /* For mobile devices */

  // Copy the text to the clipboard
  document.execCommand("copy");

  // Remove the temporary input element
  document.body.removeChild(tempInput);

  // Optionally, provide visual feedback to the user (e.g., alert or console.log)
  alert("Code copied to clipboard: " + codeToCopy);
}
