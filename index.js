let rows = 12;
const gridContainer = document.querySelector("#grid-container");
const resetBtn = document.querySelector("#reset-btn");
const sizeBtn = document.querySelector("#size-btn");

function randomRgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

let color = randomRgba();

function addCells(rows) {
    let cols = rows;
    let noOfCells = rows * cols;
    for (let i = 0; i < noOfCells; i++) {
        let cell = document.createElement("div");
        cell.setAttribute("id", `cell-${i}`);
        cell.setAttribute("class", "cell");
        gridContainer.appendChild(cell);
        
    }
    gridContainer.setAttribute("style", `grid-template-columns: repeat(${cols}, ${100 / cols}%)`);
    const cells = Array.from(document.querySelectorAll(".cell"));
    function colorCell(e) {
        let targetedCell = document.querySelector(`#${e.target.id}`);
        targetedCell.setAttribute("style", `background-color: ${color}`);
    }
    cells.forEach(cell => cell.addEventListener("mouseover", colorCell));
    resetBtn.addEventListener("click", function () {
        cells.forEach(cell => cell.setAttribute("style", "background-color: "));
    })
}

sizeBtn.addEventListener("click", function () {
    rows = 0;
    while (rows <= 0 || rows > 100) {
        rows = prompt("Please enter the desired size of the grid (max value: 100)");
        rows = parseInt(rows);
    }
    gridContainer.textContent = "";
    addCells(rows);
})

addCells(rows);