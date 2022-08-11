const { possibleKnightPositions } = require('./board');
const { extractInput } = require('./helper');

const ReadLine = require('readline');
const readLine = ReadLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

readLine.on('line', function(line) {
  const { row, column } = extractInput(line);
  if (!Number.isNaN(+row)) {
    console.error('Enter correct position, E.g., a1 or A1');
  }
  const result = possibleKnightPositions({ row, column });
  console.log(result.join(', '));
});