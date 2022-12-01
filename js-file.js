const container = document.querySelector('#container');

// container.appendChild(hi);

for (let step = 0; step < 16; step++) {
    const div = document.createElement('div');
    div.id = step;
    div.className = "step";
    div.textContent = step;
    container.appendChild(div);
}