// Global Variables
const canvasWidth = 960;
var pixelDensity = 16;
var rowCount = canvasWidth / pixelDensity;
var pixelCount = Math.pow(pixelDensity, 2);

// Initialize canvas
draw();

// Change canvas on slider change
document.getElementById("pixelDensity").addEventListener("input", draw);

// functions below this line
function draw() {
    clearCanvas();

    pixelDensity = document.getElementById("pixelDensity").value;
    pixelCount = Math.pow(pixelDensity, 2);

    populatePixel(pixelCount);
    rowCount = canvasWidth / pixelDensity;
    setCanvas(rowCount);

    paintPixel();
}

// resets canvas
function clearCanvas() {
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach((pixel) => {
        pixel.remove();
    });
};

// set canvas function of size
function setCanvas(rowCount) {
    const container = document.getElementById('container');
    container.style.gridAutoColumns = `${rowCount}px`;
    container.style.gridAutoRows = `${rowCount}px`;
    container.style.gridTemplateColumns = `repeat(${pixelDensity},${rowCount}px)`;
}

// creates individual pixel divs
function populatePixel(pixelCount) {
    for (let pixel = 0; pixel < pixelCount; pixel++) {
        const div = document.createElement('div');
        div.className = "pixel";
        // div.textContent = pixel; //shows number of pixel
        container.appendChild(div);
    }
}

function paintPixel() {
    const pixelArray = document.querySelectorAll(".pixel");

    pixelArray.forEach((pixel) => {
        pixel.addEventListener('mouseover', () => {
            if (getColorCheckbox()) {
                pixel.style.backgroundColor = randomRGB();
            }
            else {
                pixel.style.backgroundColor = "black";
            }
        })
    })
}


function randomRGB() {
    // set style, background-color to random rgb value
    const r = getRandomInt(0, 255);
    const g = getRandomInt(0, 255);
    const b = getRandomInt(0, 255);
    return `rgb(${r}, ${g}, ${b})`;
}

// function from
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function getColorCheckbox() {
    var color = document.getElementById("color");
    if (color.checked) {
        console.log("color");
        return true;
    }
    else {
        return false;
    }
}