/*
PLAN:
Creer
*/

const grid = document.getElementById('grid');
let numDivPerRow = 70;
let gridNumber = Math.pow(numDivPerRow,2);
let newDiv = ''

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

function colorDiv () {
/* when click on one of the newDiv, transform the div in the selected color */
    let gridPieces = document.querySelectorAll('.gridPiece');
    gridPieces.forEach(gridPiece => { gridPiece.addEventListener('mousemove', () => {
        gridPiece.style.background = 'white';
        console.log(gridPiece);
        
        });
    });
};
colorDiv();