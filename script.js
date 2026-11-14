let count = 0;

const heading = document.querySelector("#count");
const addButton = document.querySelector("#add");
const resetButton = document.querySelector("#reset");
const subtractButton = document.querySelector("#subtract");

function updateDisplay() {
  heading.textContent = count;
    if (count < 0) {
    heading.style.color = "red";
    } else if (count > 0) {
    heading.style.color = "green";
    } else {
    heading.style.color = "black";
    }
}

addButton.addEventListener("click", function() {
  count++;
  updateDisplay();
});

subtractButton.addEventListener("click", function() {
 count--;
 updateDisplay();
});

resetButton.addEventListener("click", function() {
  count = 0;
    updateDisplay();
});