const rows = 12;
const cols = 12;
const noOfCells = rows*cols;
const gridContainer = document.querySelector("#grid-container");
const resetBtn = document.querySelector("#reset-btn");

for(let i = 0; i < noOfCells; i++) {
    let cell = document.createElement("div");
    cell.setAttribute("id", `cell-${i}`);
    cell.setAttribute("class", "cell");
    gridContainer.appendChild(cell);
}

const cells = Array.from(document.querySelectorAll(".cell"));
function colorCell(e) {
    let targetedCell = document.querySelector(`#${e.target.id}`);
    console.log(targetedCell);
    targetedCell.setAttribute("style", "background-color: orangered");

}
cells.forEach(cell => cell.addEventListener("mouseover", colorCell));
resetBtn.addEventListener("click", function() {
    cells.forEach(cell => cell.setAttribute("style", "background-color: "));
})


gridContainer.setAttribute("style", `grid-template-columns: repeat(${cols}, ${100/cols}%)`);