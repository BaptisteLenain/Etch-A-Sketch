/*
PLAN:
Creer
*/

const grid = document.getElementById('grid');
let numDivPerRow = 32;
let gridNumber = Math.pow(numDivPerRow,2);
let newDiv = '';
let gridPieces = ''
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


function colorDiv () {
/* when click on one of the newDiv, transform the div in the selected color */
    gridPieces = document.querySelectorAll('.gridPiece');
    gridPieces.forEach(gridPiece => { gridPiece.addEventListener('mousedown', () => {
        onMove();
        });
    });
};
colorDiv();

function onMove () {
    if (isDrawing = false) {
        mouseUp();
    } else {gridPieces.forEach(gridPiece => { gridPiece.addEventListener('mousemove', () => {
            gridPiece.style.background = 'white';
            });
        });
    };
};


function mouseUp () {
    gridPieces.forEach(gridPiece => { gridPiece.addEventListener('mouseup', () => {
        isDrawing = false;
        });
    });
}
mouseUp();
