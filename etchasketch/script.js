// Variable declarations
const display = document.getElementById('display');
const pixelInput = document.getElementById('pixelInput');
const pixelDisplay = document.getElementById('pixelDisplay');
const currentColor = document.getElementById('colorInput');
const clearDisplay = document.getElementById('clear');
const toggleRainbow = document.getElementById('rainbow');
const toggleGrid = document.getElementById('grid');

// Event listener for setting up the app on page load.
window.addEventListener("load", (e) => {
    render();
    pixelDisplay.innerHTML = `${pixelInput.value} X ${pixelInput.value}`;
});

// Event listener for changing pixel color on click.
display.addEventListener("mousedown", (e) => {
    let pixel = e.target;
    changeColor(pixel);
});

// Event listener for tracking when the user changes the pixel denisty slider.
pixelInput.addEventListener("change", () => {
    pixelDisplay.innerText = `${pixelInput.value} X ${pixelInput.value}`;
    render(pixelInput.value);
});

// Event listener for toggling rainbow color mode.
toggleRainbow.addEventListener("mousedown", () => {
    if (toggleRainbow.value === "unchecked") {
        toggleRainbow.setAttribute("value", "checked");
    } else {
        toggleRainbow.setAttribute("value", "unchecked");
    }
});

// Event listener for toggling the grid system.
// toggleGrid.addEventListener("mousedown", () => {
//     if (toggleGrid.value === "checked") {
//         for (let i = 0; i < display.childElementCount; i++) {
//             display.childNodes[i].style.border = "none";
//         }
//         toggleGrid.setAttribute("value", "unchecked");
//     } else {
//         for (let i = 0; i < display.childElementCount; i++) {
//             display.childNodes[i].style.border = "1px solid gray";
//         }
//         toggleGrid.setAttribute("value", "checked");
//     }
// });

// Event listener for clearing the display.
clearDisplay.addEventListener("mousedown", () => {
    render();
})

// Renders n new pixels to the display on resize.
function render() {
    let pixelDensity = pixelInput.value;
    // toggleGrid.value = 'checked';

    while (display.childElementCount != 0) {
        display.removeChild(display.lastElementChild);
    }

    while (display.childElementCount < (pixelDensity * pixelDensity)) {
        display.style.gridTemplateRows = `repeat(${pixelDensity}, 1fr)`;
        display.style.gridTemplateColumns = `repeat(${pixelDensity}, 1fr)`;
        addPixel();
    }
}

// Adds a pixel to the display.
function addPixel() {
    let pixel = document.createElement("div");
    pixel.className = "pixel";

    // if (toggleGrid.value = 'checked') {
    //     pixel.setAttribute("border", "1px solid gray")
    // } else {
    //     pixel.setAttribute("border", "1px solid gray")
    // }

    display.appendChild(pixel);
}

// Changes the color of a pixel.
function changeColor(pixel) {
    if (toggleRainbow.value === "checked") {
        pixel.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 1)`;;
    } else {
        pixel.style.backgroundColor = currentColor.value;
    }
}