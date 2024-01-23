const colors = ["Green", "Red", "Blue", "Yellow", "Purple"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    const randomNumber = getRandomNumber();
    const selectedColor = colors[randomNumber];

    document.body.style.backgroundColor = selectedColor;
    color.textContent = selectedColor;

    // Call the function to copy the text content to the clipboard
    copyTo(selectedColor);
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

function copyTo(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    console.log("done");
}