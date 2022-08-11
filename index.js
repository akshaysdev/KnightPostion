const { possibleKnightPositions } = require('./board');
const { extractInput } = require('./helper');
const { columnLabel } = require('./constants')

const ReadLine = require('readline');
const readLine = ReadLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

readLine.on('line', function(line) {
  const { row, column } = extractInput(line);
  if (!Number.isNaN(+row) || column < 1 || column > 8 || !columnLabel[row]) {
    console.error('ENTER CORRECT POSITION');
    console.error('E.g., a1 or A1, In the range A to H , 1 to 8');
    return;
  }
  const result = possibleKnightPositions({ row, column });
  console.log(result.join(', '));
});