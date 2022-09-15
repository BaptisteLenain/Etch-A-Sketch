/*
PLAN:
Creer
*/

const grid = document.getElementById('grid');
gridSize = grid.clientWidth;
console.log(gridSize);

function createDivs(gridNumber) {
    for (let i = 0; i < gridNumber; i++) {
    test = Math.sqrt(gridNumber);
    console.log(test);    

    const newDiv = document.createElement('div');
    newDiv.classList.add('gridPiece');
    newDivMinSize = gridSize / test;
    console.log(newDivMinSize);
    newDiv.style.minWidth = `${newDivMinSize}px`;
    newDiv.style.minHeight = `${newDivMinSize}px`;
    grid.appendChild(newDiv);
    }
   }
createDivs(3969);
 