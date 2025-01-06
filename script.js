// Se llamana elementos del HTML
const board = document.getElementById('board');
const scoreBoard = document.getElementById('scoreBoard');
const start = document.getElementById('start');
const gameOver = document.getElementById('gameOver')


// Configuraciones del juego
const boardSize = 10;
const gameSpeed = 100;
const squareTypes = {
  emptySuare: 0,
  snakeSquare: 1,
  foodSquare: 2,
};

constDirections = {
  ArrowUp: -10,
  ArrowDown: 10,
  ArrowRight: 1,
  ArrowLeft: -1,
};

//variables del juego
let snake;
let score;
let direction;
let boardSquares;
let emptySuares;
let moveInterval;
