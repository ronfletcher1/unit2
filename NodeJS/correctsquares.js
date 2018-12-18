let numRows = 10;
let numCols = 10;
let matrix = [];
for (let row = 0; row < numRows; row++){
  matrix.push([]);
  for(let cell = 0; cell < numCols; cell++){
    if (row === 0 || cell === 0){
      matrix[row][cell] = 1;
    } else {
      matrix[row][cell] = matrix[row-1][cell] + matrix[row][cell-1];
    }
  }
}
matrix.forEach(row => console.log(row));
console.log(`The number of paths is ${matrix[numRows-1][numCols-1]}`);