const container = document.querySelector('#container');

// creates number of squares
const squareCount = 16;
for (let step = 0; step < squareCount; step++) {
    const div = document.createElement('div');
    div.id = step;
    div.className = "step";
    div.textContent = step;
    container.appendChild(div);
}

