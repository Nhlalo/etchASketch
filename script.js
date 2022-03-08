const container = document.querySelector('.container');
const textInput = document.querySelector('#textInput');
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
    })
  })
}

function styleYellow(){
  const box = document.querySelectorAll('.squareBox');
  document.getElementById('yellow').addEventListener('click',() => {
    box.forEach(squareBox => {
      squareBox.addEventListener('mouseover',function(){
        squareBox.style.background = 'yellow'
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
    })
  })
}

function resizeGrid(){
  let rowsColumns = textInput.value; 
  textInput.value = '';


 if(rowsColumns < 0 || rowsColumns > 100 || rowsColumns.includes('.') || rowsColumns == '' ){
  container.classList.add('red')
  setTimeout(function(){  
    container.classList.remove('red')}, 1000)
 }
 else{
   determineGridSize(rowsColumns)
   styleGray()
   styleBlack()
   styleYellow()
   styleRGB()
   removeGridLines()
   addGridLines()
   eraser()
 }
}
btnResize.addEventListener('click',resizeGrid)

function determineDefault(x){
  reset();
for(let i = 0; i < (256) ; i++){
  const newDivs = document.createElement('div');
  container.appendChild(newDivs);
  newDivs.classList.add('squareBox')
  newDivs.classList.add('styleDivs')
}

container.style.gridTemplateRows = `repeat(16,minmax(1px,1fr))`;
container.style.gridTemplateColumns= `repeat(16,minmax(1px,1fr))`;
styleGray()
styleBlack()
styleYellow()
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
      squareBox.addEventListener('click',function(){
        squareBox.style.background = ''
      })
    })
}

window.addEventListener('keydown',e => {
  if(e.key === 'Enter'){
    resizeGrid()
  }
})
