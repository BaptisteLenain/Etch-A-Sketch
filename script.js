/*
PLAN:
Creer
*/

const grid = document.getElementById('grid');
let numDivPerRow = 16;
let gridNumber = Math.pow(numDivPerRow,2);
let newDiv = '';
let gridPieces = '';
let isDrawing = false;

function createDivs() {
/* This function creates the divs of the grid */
    for (let i = 0; i < gridNumber; i++) {
        test = Math.sqrt(gridNumber);   
        newDiv = document.createElement('div');
        newDiv.classList.add('gridPiece');
        grid.appendChild(newDiv);
        gridCols = grid.style.gridTemplateColumns = `repeat(${Math.sqrt(gridNumber)},1fr)`;
        gridRows = grid.style.gridTemplateRows = `repeat(${Math.sqrt(gridNumber)},1fr)`;
    };
};
createDivs(gridNumber);

window.addEventListener('mousedown', (e) => {
    isDrawing = true;
});
window.addEventListener('mouseup', (e) => {
    isDrawing = false;
});
console.log(isDrawing);


