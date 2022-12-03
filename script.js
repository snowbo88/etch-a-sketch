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
    const pixels = document.querySelectorAll(".pixel, .pixelBlack, .pixelColor");
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

// on hover, change className from pixel to pixelBlack
// may need a switch statement here
function pixelColorSet(pixelArray, colorClass) {
    pixelArray.forEach((pixel) => {
        pixel.addEventListener('mouseover', () => {
            pixel.className = colorClass;
        });
    });
}

function paintPixel() {
    const pixelArray = document.querySelectorAll(".pixel");
    var color = document.getElementById("color");

    // initializes color, even when pixel density is changed
    if (color.checked) {
        pixelColorSet(pixelArray, "pixelColor");
    }
    else {
        pixelColorSet(pixelArray, "pixelBlack");
    }

    // listen for changes
    color.addEventListener('change', () => {
        if (color.checked) {
            pixelColorSet(pixelArray, "pixelColor");
        }
        else {
            pixelColorSet(pixelArray, "pixelBlack");
        }
    })
}


