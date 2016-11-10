/*
doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2],
           [6, 7, 2, 1, 9, 5, 3, 4, 8],
           [1, 9, 8, 3, 4, 2, 5, 6, 7],
           [8, 5, 9, 7, 6, 1, 4, 2, 3],
           [4, 2, 6, 8, 5, 3, 7, 9, 1],
           [7, 1, 3, 9, 2, 4, 8, 5, 6],
           [9, 6, 1, 5, 3, 7, 2, 8, 4],
           [2, 8, 7, 4, 1, 9, 6, 3, 5],
           [3, 4, 5, 2, 8, 6, 1, 7, 9]]);

 => "Finished!"

 doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2],
            [6, 7, 2, 1, 9, 0, 3, 4, 9],
            [1, 0, 0, 3, 4, 2, 5, 6, 0],
            [8, 5, 9, 7, 6, 1, 0, 2, 0],
            [4, 2, 6, 8, 5, 3, 7, 9, 1],
            [7, 1, 3, 9, 2, 4, 8, 5, 6],
            [9, 0, 1, 5, 3, 7, 2, 1, 4],
            [2, 8, 7, 4, 1, 9, 6, 3, 5],
            [3, 0, 0, 4, 8, 1, 1, 7, 9]])

 => "Try again!"
https://www.codewars.com/kata/53db96041f1a7d32dc0004d2/train/javascript
*/

const doneOrNot = (board) => {
  // if there are any zeros, return "try again!"
  // const containsAll : takes an array and returns bool
  // const getRows : takes a board and an index, and returns returns a row
  // const getColumns : takes a board and an index, return a column
  // const getRegions : takes a board, an x and a y, returns a region
  // if containsAll(getRows) && containsAll(getColumns) && containsAll(getRegions)
  // return "Finished!"
  // else return "Try again!"
}


const board = [[5, 3, 4, 6, 7, 8, 9, 1, 2],
               [6, 7, 2, 1, 9, 0, 3, 4, 9],
               [1, 0, 0, 3, 4, 2, 5, 6, 0],
               [8, 5, 9, 7, 6, 1, 0, 2, 0],
               [4, 2, 6, 8, 5, 3, 7, 9, 1],
               [7, 1, 3, 9, 2, 4, 8, 5, 6],
               [9, 0, 1, 5, 3, 7, 2, 1, 4],
               [2, 8, 7, 4, 1, 9, 6, 3, 5],
               [3, 0, 0, 4, 8, 1, 1, 7, 9]]

const containsAll = (array) => {
  for(let i = 1; i <= array.length; i ++){
    if (!array.includes(i)) { return false }
  }
  return true;
}

const getRow = (board, i) => {
  return board[i];
}

const getColumn = (board, i) => {
  return board.map((el) => el[i]);
}

const getRegion = (board, x, y) => {
  const region = new Array();

  for(let i = 0; i < 3; i++){
    let currentIndex = y;
    for(let w = 0; w < 3; w++){
      region.push(board[x][currentIndex]);
      currentIndex += 1;
    }
    x += 1;
  }
  return region;
}
