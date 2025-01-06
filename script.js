// Se llamana elementos del HTML
const board = document.getElementById('board');
const scoreBoard = document.getElementById('scoreBoard');
const startButton = document.getElementById('start');
const gameOver = document.getElementById('gameOver')


// Configuraciones del juego
const boardSize = 10;
const gameSpeed = 100;

const squareTypes = {
  emptySquares: 0,
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
let emptySquares;
let moveInterval;


const createBoard = () => {
  boardSquares.forEach( (row, rowIndex) => {
    row.forEach( (column, columnIndex) => {
      const squareValue = `${rowIndex}${columnIndex}`;
       const squareElements = document.createElement('div');
    });
  });
};

const setGame = () => {
  snake = ['00', '01', '02', '03'];
  score = snake.length;
  direction = 'ArrowRight';
  boardSquares = Array.from(Array(boardSize), () => new Array(boardSize).fill(squareTypes.emptySquares));
  console.log(boardSquares);
  board.innerHTML= '';
  emptySquares = [];
  createBoard();
};


const startGame = () => {
  setGame();

};

startButton.addEventListener('click', startGame);
