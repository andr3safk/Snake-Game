// Se llamana elementos del HTML
const board = document.getElementById('board');
const scoreBoard = document.getElementById('scoreBoard');
const startButton = document.getElementById('start');
const gameOverSign = document.getElementById('gameOver')


// Configuraciones del juego
const boardSize = 10;
const gameSpeed = 120;

const squareTypes = {
  emptySquares: 0,
  snakeSquare: 1,
  foodSquare: 2,
};

const directions = {
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

const drawSnake = () => {
  snake.forEach(square => drawsquare(square, 'snakeSquare'));
}

const drawsquare = (square, type) => {
  const [row, column] = square.split('');
  boardSquares[row][column] = squareTypes[type];
  const squareElement = document.getElementById(square);
  squareElement.setAttribute('class', `square ${type}`);

  if(type === 'emptySquare'){
    emptySquares.push(square);
  }else {
    if(emptySquares.indexOf(square) !== -1) {
      emptySquares.splice(emptySquares.indexOf(square), 1);
    }
  }
};

const moveSnake = () => {
  const newSquare = String(
    Number(snake[snake.length - 1]) + directions[direction])
    .padStart(2, '0');
  const [row, column] = newSquare.split('');

  if( newSquare < 0 ||
    newSquare > boardSize * boardSize ||
    (direction === 'ArrowRight' && column == 0) ||
    (direction === 'ArrowLeft' && column == 9 ||
    boardSquares[row][column] === squareTypes.snakeSquare) ) {
    gameOver();

    }else{
      snake.push(newSquare);
      if(boardSquares [row][column] === squareTypes.foodSquare) {
        addFood();
      }else {
        const emptySquare = snake.shift();
        drawsquare(emptySquare, 'emptySquare');
      }
      drawSnake();
    }
}

const addFood = () => {
  score ++;
  updateScore();
  createRandomFood();
}

const gameOver = () => {
  gameOverSign.style.display = 'block';
  clearInterval(moveInterval)
  startButton.disabled = false;
}

const setDirection = newDirection => {
  direction = newDirection;
};

const directionEvent = key => {
  switch (key.code){
    case 'ArrowUp':
      direction != 'ArrowDown' && setDirection(key.code)
      break;
    case 'ArrowDown':
      direction != 'ArrowUp' && setDirection(key.code)
      break;
    case 'ArrowRight':
      direction != 'ArrowLeft' && setDirection(key.code)
      break;
    case 'ArrowLeft':
      direction != 'ArrowRight' && setDirection(key.code)
      break;
  }
};

const createRandomFood = () => {
  const randomEmptySquare = emptySquares[Math.floor(Math.random() * emptySquares.length)]
  drawsquare(randomEmptySquare, 'foodSquare');
};

const updateScore = () =>{
  scoreBoard.innerText = score;
}

const createBoard = () => {
  boardSquares.forEach( (row, rowIndex) => {
    row.forEach( (column, columnIndex) => {
      const squareValue = `${rowIndex}${columnIndex}`;
      const squareElement = document.createElement('div');
      squareElement.setAttribute('class', 'square emptySquare');
      squareElement.setAttribute('id', squareValue);
      board.appendChild(squareElement);
      emptySquares.push(squareValue);
    });
  });
};

const setGame = () => {
  snake = ['00', '01', '02', '03'];
  score = snake.length-4;
  direction = 'ArrowRight';
  boardSquares = Array.from(Array(boardSize), () => new Array(boardSize).fill(squareTypes.emptySquares));
  console.log(boardSquares);
  board.innerHTML= '';
  emptySquares = [];
  createBoard();
};


const startGame = () => {
  setGame();
  gameOverSign.style.display = 'none';
  startButton.disabled = true;
  drawSnake();
  updateScore();
  createRandomFood();
  document.addEventListener('keydown', directionEvent);
  moveInterval = setInterval( () => moveSnake(), gameSpeed);
};

startButton.addEventListener('click', startGame);