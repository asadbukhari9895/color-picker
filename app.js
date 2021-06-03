const colors = ["green", "red", "cyan", "#f15025", "blue"];



const btn = document.getElementById("btn");
const color = document.querySelector(".color");


btn.addEventListener("click", function () {
    const randomNumber = generateRandom();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]
});

function generateRandom() {
    return Math.floor(Math.random() * colors.length);
}
