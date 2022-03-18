const container = document.querySelector('.container');
const rangeInput = document.querySelector('#rangeInput');
const btnResize = document.querySelector('#resize');

function determineGridSize(x){
  reset();
for(let i = 0; i < (x**2) ; i++){
  const newDivs = document.createElement('div');
  container.appendChild(newDivs);
  newDivs.classList.add('squareBox')
  newDivs.classList.add('styleDivs')

    newDivs.addEventListener('mouseover',function(){
      newDivs.style.background = 'black'
    })
}

container.style.gridTemplateRows = `repeat(${x},minmax(1px,1fr))`;
container.style.gridTemplateColumns= `repeat(${x},minmax(1px,1fr))`;
}
function removeGridLines(){
  const box = document.querySelectorAll('.squareBox');
  document.querySelector('.btnRemoveGrid').addEventListener('click',function(){
    box.forEach(squarebox =>{
      squarebox.classList.remove('styleDivs')
    })
  })
}
function addGridLines(){
  const box = document.querySelectorAll('.squareBox');
  document.querySelector('.btnAddGrid').addEventListener('click',function(){
    box.forEach(squarebox =>{
      squarebox.classList.add('styleDivs')
    })
  })
}

function reset(){
  const Box = document.querySelectorAll('.squareBox');
   Box.forEach(squareBox => container.removeChild(squareBox))
   
}

function styleGray(){
  const box = document.querySelectorAll('.squareBox');
  document.getElementById('gray').addEventListener('click',() => {
    box.forEach(squareBox => {
      squareBox.addEventListener('click',function(){
        squareBox.style.background = 'gray'
      })
      squareBox.addEventListener('mouseover',function(){
        squareBox.style.background = 'gray'
      })
    })
  })
}

function styleBlack(){
  const box = document.querySelectorAll('.squareBox');
  document.getElementById('black').addEventListener('click',() => {
    box.forEach(squareBox => {
      squareBox.addEventListener('mouseover',function(){
        squareBox.style.background = 'black'
      })
      squareBox.addEventListener('click',function(){
        squareBox.style.background = 'black'
      })
    })
  })
}

function styleColor(){
  const box = document.querySelectorAll('.squareBox');
  const color = document.querySelector('#color')
 
  

  color.addEventListener('input',(e) => {
    box.forEach(squareBox => {
      const colorInput = color.value;
      squareBox.addEventListener('mouseover',function(){
        squareBox.style.background = `${colorInput}`
      })
      squareBox.addEventListener('click',function(){
        const colorInput = color.value;
        squareBox.style.background = `${colorInput}`
      })
    })
  })
}

function styleRGB(){
  const box = document.querySelectorAll('.squareBox');
  document.getElementById('rgb').addEventListener('click',() => {
    box.forEach(squareBox => {
      squareBox.addEventListener('mouseover',function(){
        let red = Math.floor(Math.random() * (255 + 1));
        let blue = Math.floor(Math.random() * (255 + 1));
        let green = Math.floor(Math.random() * (255 + 1));
        squareBox.style.background = `rgb(${red},${blue},${green})`
      })
      squareBox.addEventListener('click',function(){
        let red = Math.floor(Math.random() * (255 + 1));
        let blue = Math.floor(Math.random() * (255 + 1));
        let green = Math.floor(Math.random() * (255 + 1));
        squareBox.style.background = `rgb(${red},${blue},${green})`
      })
    })
  })
}

function resizeGrid(){
  let rowsColumns = rangeInput.value; 
  document.querySelector('span').textContent = `${rowsColumns}`
   determineGridSize(rowsColumns)
   styleGray()
   styleBlack()
   styleColor()
   styleRGB()
   removeGridLines()
   addGridLines()
   eraser()
 
}
rangeInput.addEventListener('click',resizeGrid)

function determineDefault(x){
  reset();
for(let i = 0; i < (256) ; i++){
  const newDivs = document.createElement('div');
  container.appendChild(newDivs);
  newDivs.classList.add('squareBox')
  newDivs.classList.add('styleDivs')
}
document.querySelector('span').textContent = '16'
rangeInput.value = 16
container.style.gridTemplateRows = `repeat(16,minmax(1px,1fr))`;
container.style.gridTemplateColumns= `repeat(16,minmax(1px,1fr))`;
styleGray()
styleBlack()
styleColor()
styleRGB()
removeGridLines()
addGridLines()
eraser()
}

determineDefault()

function reload(){
  reset()
  determineDefault()
}
document.querySelector('.btnReset').addEventListener('click',reload)

function eraser(){
  const box = document.querySelectorAll('.squareBox');
    box.forEach(squareBox => {
      squareBox.addEventListener('dblclick',function(){
        squareBox.style.background = ''
      })
    })
}


