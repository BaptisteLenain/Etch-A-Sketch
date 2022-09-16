/*
PLAN:
Creer
*/

const grid = document.getElementById('grid');
let numDivPerRow = 10;
let gridNumber = Math.pow(numDivPerRow,2);

function createDivs() {
    for (let i = 0; i < gridNumber; i++) {
        test = Math.sqrt(gridNumber);
        console.log(test);    

        const newDiv = document.createElement('div');
        newDiv.classList.add('gridPiece');
        grid.appendChild(newDiv);
        gridCol = grid.style.gridTemplateColumns = `repeat(${Math.sqrt(gridNumber)},1fr)`;
        gridRow = grid.style.gridTemplateRows = `repeat(${Math.sqrt(gridNumber)},1fr)`;
    }
}
createDivs(gridNumber);
 