// Global Variables
const canvasWidth = 960;
var column = 16;
var rowCount = canvasWidth / column;
var pixelCount = Math.pow(column, 2);

// Initialize canvas
updatePixelCount();

// Change canvas on slider change
document.getElementById("column").addEventListener("input", updatePixelCount);

// functions below this line
function updatePixelCount() {
    clearCanvas();

    column = document.getElementById("column").value;
    pixelCount = Math.pow(column, 2);

    populatePixel(pixelCount);
    rowCount = canvasWidth / column;
    setCanvas(rowCount);

    paintPixel();
}

// resets canvas
function clearCanvas() {
    const pixels = document.querySelectorAll(".pixel, .pixelBlack");
    pixels.forEach((pixel) => {
        pixel.remove();
    });
};

// set canvas function of size
function setCanvas(rowCount) {
    const container = document.getElementById('container');
    container.style.gridAutoColumns = `${rowCount}px`;
    container.style.gridAutoRows = `${rowCount}px`;
    container.style.gridTemplateColumns = `repeat(${column},${rowCount}px)`;
}

// creates individual pixel divs
function populatePixel(pixelCount) {
    for (let pixel = 0; pixel < pixelCount; pixel++) {
        const div = document.createElement('div');
        div.className = "pixel";
        // div.textContent = pixel;
        container.appendChild(div);
    }
}

// on hover, change className from pixel to pixelBlack
// may need a switch statement here
function paintPixel() {
    const pixelArray = document.querySelectorAll(".pixel");
    pixelArray.forEach((pixel) => {
        pixel.addEventListener('mouseover', () => {
            pixel.className = "pixelBlack";
        });
    });
}

// TODO check if toggle switch is set to black or color
function setColorMode() {

}