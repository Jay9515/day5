function spotlightMap(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const spotlightGrid = [];

  for (let i = 0; i < rows; i++) {
    const spotlightRow = [];
    for (let j = 0; j < cols; j++) {
      let sum = 0;

      for (let x = i - 1; x <= i + 1; x++) {
        for (let y = j - 1; y <= j + 1; y++) {
          if (x >= 0 && x < rows && y >= 0 && y < cols) {
            sum += grid[x][y];
          }
        }
      }

      spotlightRow.push(sum);
    }
    spotlightGrid.push(spotlightRow);
  }

  return spotlightGrid;
}

const grid1 = [
  [2, 5],
  [4, 6],
];
console.log(spotlightMap(grid1));

const grid2 = [
  [1, 2, 3, 2],
  [4, 5, 6, 4],
  [7, 8, 9, 2],
  [10, 11, 12, 2],
];
console.log(spotlightMap(grid2));

const grid3 = [
  [2, 9, 1, 9, 2],
  [9, 3, 4, 1, 0],
];
console.log(spotlightMap(grid3));

const grid4 = [[9]];
console.log(spotlightMap(grid4));
