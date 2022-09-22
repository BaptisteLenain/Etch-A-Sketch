const DEFAULT_MODE = 'color';
const DEFAULT_COLOR = 'black';
const DEFAULT_SIZE = 16;

let currentMode = DEFAULT_MODE;
let currentColor = DEFAULT_COLOR;
let currentSize = DEFAULT_SIZE;

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)
console.log(mouseDown);

const clearBtn = document.getElementById('clearBtn');
const eraserBtn = document.getElementById('eraserBtn');
const colorBtn = document.getElementById('colorBtn');
const sliderBtn = document.getElementById('sliderBtn');
const slider = document.getElementById('slider');
const colorChoiceBtn = document.getElementById('colorChoiceBtn');





clearBtn.onclick = () => reloadGrid();
eraserBtn.onclick = () => setCurrentMode('eraser');
colorBtn.onclick = () => setCurrentMode('color');
sliderBtn.oninput = () => changeSize(sliderBtn.value);
colorChoiceBtn.oninput = () => colorChoice(colorChoiceBtn.value);

function setCurrentMode(newMode) {
    currentMode = newMode;
    activeMode(currentMode);
};

function activeMode(currentMode) {
    if (currentMode === 'color') {
        colorBtn.classList.add('active');
        eraserBtn.classList.remove('active');
    } else {
        colorBtn.classList.remove('active');
        eraserBtn.classList.add('active');
    }
};
activeMode(currentMode);

function colorChoice (value) {
    currentColor = value;
    console.log(currentColor);
}


function changeSize(value) {
    currentSize = value;
    gridNumber = Math.pow(currentSize,2);
    console.log(currentSize);
    console.log(gridNumber);
    grid.innerHTML = '';
    createDivs(gridNumber);
    sliderShow(currentSize);
};

function sliderShow(currentSize) {
    slider.innerHTML = `${currentSize} x ${currentSize}`;
}


const grid = document.getElementById('grid');
let gridNumber = Math.pow(currentSize,2);
let gridElement = '';
let isDrawing = false;


function reloadGrid() {
    grid.innerHTML = '';
    createDivs(gridNumber);
};






function createDivs(gridNumber) {
/* This function creates the divs of the grid */
    for (let i = 0; i < gridNumber; i++) {
        test = Math.sqrt(gridNumber);   
        gridElement = document.createElement('div');
        gridElement.classList.add('grid-element');
        gridElement.addEventListener('mouseover', changeColor);
        gridElement.addEventListener('mousedown', changeColor);
        grid.appendChild(gridElement);
        gridCols = grid.style.gridTemplateColumns = `repeat(${Math.sqrt(gridNumber)},1fr)`;
        gridRows = grid.style.gridTemplateRows = `repeat(${Math.sqrt(gridNumber)},1fr)`;
    };
};
createDivs(gridNumber);

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    if (currentMode === 'color') {
      e.target.style.backgroundColor = currentColor
    } else if (currentMode === 'eraser') {
      e.target.style.backgroundColor = '#fefefe'
    }
  }


  window.onload = () => {
    sliderShow(currentSize);
    activeMode(currentMode);
  } 


