const initBoard = (boardSize) =>
  Array(boardSize)
    .fill([])
    .map(() => Array.from({ length: boardSize }, () => (Math.random() > 0.5 ? 1 : 0)));

const withinBoundaries = (x, y, board) => {
  if (y > -1 && y < board.length && x > -1 && x < board.length) {
    return true;
  } else {
    return false;
  }
};

const countNeighbour = (x, y, board) => {
  if (withinBoundaries(x, y, board) && board[y][x] > 0) {
    return 1;
  } else {
    return 0;
  }
};

const countNeighbours = (x, y, board) => {
  let neighbourCount = 0;

  neighbourCount += countNeighbour(x - 1, y - 1, board);
  neighbourCount += countNeighbour(x, y - 1, board);
  neighbourCount += countNeighbour(x + 1, y - 1, board);

  neighbourCount += countNeighbour(x - 1, y, board);
  neighbourCount += countNeighbour(x + 1, y, board);

  neighbourCount += countNeighbour(x - 1, y + 1, board);
  neighbourCount += countNeighbour(x, y + 1, board);
  neighbourCount += countNeighbour(x + 1, y + 1, board);

  return neighbourCount;
};

const lifeOrDeath = (x, y, board) => {
  const neighbourCount = countNeighbours(x, y, board);
  let newValue = 0;
  if (neighbourCount === 2 && board[y][x] > 0) {
    newValue = board[y][x] + 1;
  }
  if (neighbourCount === 3) {
    newValue = board[y][x] + 1;
  }
  return newValue;
};

const lifeCycle = (board) =>
  board.map((row, rowIndex) => row.map((cell, cellIndex) => lifeOrDeath(cellIndex, rowIndex, board)));

const countAlive = (board) => board.flat().filter((v) => v > 0).length;

const getNLastReversedValuesFromArray = (inputArray, nValues) => {
  const newArray = [...inputArray].reverse();
  return newArray.slice(0, nValues);
};

const getSquareColourByAge = (squareAge) => {
  let ageIndex = Math.ceil(squareAge / 10);
  const ageColours = [
    "ffffff",
    "73ff00",
    "e4ff00",
    "ff0300",
    "ff006d",
    "e600ff",
    "7700ff",
    "0020ff",
    "0090ff",
    "00ffd0",
    "ffffff",
  ];
  return ageColours[ageIndex <= 10 ? ageIndex : 10];
};

export {
  initBoard,
  countNeighbours,
  lifeOrDeath,
  lifeCycle,
  countAlive,
  getNLastReversedValuesFromArray,
  getSquareColourByAge,
};
