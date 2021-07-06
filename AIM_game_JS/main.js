const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
let time = 0
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
let score = 0
// const colors = [
//  "red",
//  "green",
//  "blue",
//  "yellow",
//  "orange",
//  "purple",
//  "#ea5b5b",
//  "#5b73ea",
//  "#5bea7f",
//  "#e8ea5b",
//  "#f7350e",
// ];


startBtn.addEventListener('click', (event) => {
 event.preventDefault()
 screens[0].classList.add('up')
})

timeList.addEventListener('click', (event) => {
 if (event.target.classList.contains('time-btn')) {
  time = parseInt(event.target.getAttribute('data-time'))
  screens[1].classList.add("up");
  startGame()
 }
})

board.addEventListener('click', (event) => {
 if (event.target.classList.contains('circle')) {
  score++
  event.target.remove()
  createRandomCircle();
 }
})

function startGame() {
 setInterval(decreaseTime, 1000)
 createRandomCircle()

 // timeEl.innerHTML = `00:${time}`
 setTime(time)
}

function decreaseTime() {
 if (time === 0) {
  finishGame()
 } else {
  let current = --time;
  if (current < 10) {
   current = `0${current}`;
  }
  // timeEl.innerHTML = `00:${current}`;
  setTime(current);
 }
}

function setTime(value) {
 timeEl.innerHTML = `00:${value}`;
}

function finishGame() {
 timeEl.parentNode.remove()
 board.innerHTML = `<h2>Your core: <span class="primary"> ${score}</span></h2>`;
}

function createRandomCircle() {
 const circle = document.createElement('div')
 const sizeCircle = getRandomSizeCircle(12, 90)
 const { width, height } = board.getBoundingClientRect()
 const x = getRandomSizeCircle(0, width - sizeCircle)
 const y = getRandomSizeCircle(0, height - sizeCircle)

 circle.classList.add('circle')
 circle.style.width = `${sizeCircle}px`
 circle.style.height = `${sizeCircle}px`
 circle.style.top = `${y}px`
 circle.style.left = `${x}px`

 board.append(circle)
}

function getRandomSizeCircle(min, max) {
 return Math.round(Math.random() * (max - min) + min)
}

function winTheGame() {
 function kll() {
  const circle = document.querySelector('.circle')

  if (circle) {
  circle.click();
  }
 }

 setInterval(kll, 5)
}

////////////////////////////
// function setColor(element) {
//  const color = getRandomColor();
//  element.style.backgroundColor = color;
//  // element.style.boxShadow = `0 0 2px ${color}, 0 0 5px ${color}`;
// }

// function getRandomColor() {
//  const index = Math.floor(Math.random() * colors.length);
//  return colors[index];
// }