// Global Variables
const canvasWidth = 960;
var column = 16;
var rowCount = canvasWidth / column;
var squareCount = Math.pow(column, 2);

// Initialize canvas
updateSquareCount();

// Change canvas on slider change
document.getElementById("column").addEventListener("input", updateSquareCount);

// functions below this line
function updateSquareCount() {
    clearCanvas();

    column = document.getElementById("column").value;
    squareCount = Math.pow(column, 2);

    populateSquare(squareCount);
    rowCount = canvasWidth / column;
    setCanvas(rowCount);

    paintSquare();
}

// resets canvas
function clearCanvas() {
    const squares = document.querySelectorAll(".square, .squareHover");
    squares.forEach((square) => {
        square.remove();
    });
};

// set canvas function of size
function setCanvas(rowCount) {
    const container = document.getElementById('container');
    container.style.gridAutoColumns = `${rowCount}px`;
    container.style.gridAutoRows = `${rowCount}px`;
    container.style.gridTemplateColumns = `repeat(${column},${rowCount}px)`;
}

// creates individual square divs
function populateSquare(squareCount) {
    for (let square = 0; square < squareCount; square++) {
        const div = document.createElement('div');
        div.className = "square";
        // div.textContent = square;
        container.appendChild(div);
    }
}

// on hover, change className from square to squareHover
function paintSquare() {
    const squareArray = document.querySelectorAll(".square");
    squareArray.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.className = "squareHover";
        });
    });
}