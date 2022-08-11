const { createCells } = require('./helper');
const { columnLabel } = require('./constants');

const createBoard = () => {
  const chessBoard = [];
  const rows = 8;

  for (let idx = 0; idx < rows; idx++) {
    const row = new Array(8).fill(0, 0, 8);
    chessBoard.push(row);
  }

  return chessBoard;
};

const knightPosition = (chessBoard, row, column, possiblePositions) => {
  if (
    row < 0 ||
    column < 0 ||
    (row >= 0 && row >= chessBoard.length) ||
    (column > 0 && column >= chessBoard[0].length)
  ) {
    return;
  }

  let label;
  Object.keys(columnLabel).forEach((key) => {
    if (columnLabel[key] === row + 1) {
      label = key;
    }
  });

  const position = `${label}${column + 1}`;
  possiblePositions.push(position);
  
  return;
};

const possibleKnightPositions = (currentPosition) => {
  const chessBoard = createBoard();
  const possiblePositions = [];

  const row = columnLabel[currentPosition.row] - 1;
  const column = +currentPosition.column - 1;

  // North direction
  knightPosition(chessBoard, row + 1, column - 2, possiblePositions);
  knightPosition(chessBoard, row - 1, column - 2, possiblePositions);

  // South Direction
  knightPosition(chessBoard, row + 1, column + 2, possiblePositions);
  knightPosition(chessBoard, row - 1, column + 2, possiblePositions);

  // East Direction
  knightPosition(chessBoard, row + 2, column + 1, possiblePositions);
  knightPosition(chessBoard, row + 2, column - 1, possiblePositions);

  // West Direction
  knightPosition(chessBoard, row - 2, column + 1, possiblePositions);
  knightPosition(chessBoard, row - 2, column - 1, possiblePositions);

  return possiblePositions;
};

module.exports = { possibleKnightPositions };
