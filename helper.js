const extractInput = (input) => {
  const [row, column] = input.split('');
  return { row: row.toUpperCase(), column };
}

const createCells = () => {
  const row = new Array(8).fill(0, 0, 8);
  return row;
}

module.exports = { extractInput, createCells };