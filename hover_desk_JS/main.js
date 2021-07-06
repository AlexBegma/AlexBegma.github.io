const board = document.querySelector('#board')
const SQUARES_NUMBER = 1500
const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', '#ea5b5b', '#5b73ea', '#5bea7f', '#e8ea5b', '#f7350e']

for (let i = 0; i < SQUARES_NUMBER; i++) {
 const square = document.createElement('div')
 square.classList.add('square')

 square.addEventListener('mouseover', () =>
  setColor(square))

 square.addEventListener('mouseleave', () =>
  removeColor(square))

 board.append(square)
}

function setColor(element) {
 const color = getRandomColor()
 element.style.backgroundColor = color
 element.style.boxShadow = `0 0 px ${color}, 0 0 5px ${color}`
}

function removeColor(element) {
 element.style.backgroundColor = '#3c3c3c'
 element.style.boxShadow = `0 0 2px #1c1c1c`
}

function getRandomColor() {
 const index = Math.floor(Math.random() * colors.length)

 return colors[index]
}