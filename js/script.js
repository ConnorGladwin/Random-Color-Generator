const hsl = document.querySelector(".btn_hsl");
const rgb = document.querySelector(".btn_rgb");

// --- HSL METHOD ---

// defines the variable that will be compared in the function
var hue = 0;

function handleColorHSL() {
    var lastHue = hue; // creates a variable that contains the last used hsl value
    hue = Math.floor(Math.random() * 30) * 12; // randomly generates a new hsl value
    console.log(hue);

    // checks if last color and new color are the same
    // if they are it will rerun the function
    // if not it will change the background color
    if (hue === lastHue) {
        handleColor();
    } else {
        document.body.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
    }
}

// --- RGB METHOD ---

function handleColorRGB() {
    var r = Math.floor(Math.random() * 10) * 30;
    var b = Math.floor(Math.random() * 10) * 30;
    var g = Math.floor(Math.random() * 10) * 30;

    console.log(r, g, b);

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}

hsl.addEventListener("click", handleColorHSL);
rgb.addEventListener("click", handleColorRGB);
document.onload(handleColorHSL());