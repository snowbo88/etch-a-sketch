const container = document.querySelector('#container');

// container.appendChild(hi);

for (let step = 0; step < 16; step++) {
    const div = document.createElement('div');
    // hi.textContent = "AH" + step;
    div.id = step;
    container.appendChild(div);
}