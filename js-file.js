const canvasWidth = 960;
const column = 16;
const squareCount = Math.pow(column, 2);

// sets container grid CSS
const container = document.getElementById('container');
const rowCount = canvasWidth / column;
container.style.gridAutoColumns = `${rowCount}px`;
container.style.gridAutoRows = `${rowCount}px`;
container.style.gridTemplateColumns = `repeat(${column},${rowCount}px)`;

// creates individual squares
for (let square = 0; square < squareCount; square++) {
    const div = document.createElement('div');
    div.className = "square";
    // div.textContent = square;
    container.appendChild(div);
}

// on hover, change className from square to squareHover
const squareArray = document.querySelectorAll(".square");
squareArray.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.className = "squareHover";
    });
});