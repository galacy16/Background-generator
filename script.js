let css = document.querySelector("p");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");

function setGradient() {
    body.style.background =
        "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ";";
}

function setGradientLeft() {
    body.style.background =
        "linear-gradient(to left, " + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

// Add event listeners for the additional directions
document.getElementById("right").addEventListener("click", setGradient);
document.getElementById("left").addEventListener("click", setGradientLeft);
