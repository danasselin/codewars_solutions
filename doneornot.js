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
  if(checkRows(board) && checkColumns(board) && checkRegions(board)){
    return "Finished!";
  } else {
    return "Try again!";
  }
}

const containsAll = (array) => {
  for(let i = 1; i <= array.length; i ++){
    if (!array.includes(i)) { return false }
  }
  return true;
}

const getRow = (board, i) => {
  return board[i];
}

const checkRows = (board) => {
  for(let i = 0; i < board.length; i++){
    if (!containsAll(getRow(board, i))){ return false };
  }
  return true;
}

const getColumn = (board, i) => {
  const column = board.map((el) => el[i]);
  return column;
}

const checkColumns = (board) => {
  for(let i = 0; i < board.length; i++){
    if (!containsAll(getColumn(board, i))){ return false };
  }
  return true;
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

const checkRows = (board) => {
  for(let i = 0; i < board.length; i++){
    if (!containsAll(getRow(board, i))){ return false };
  }
  return true;
}

const checkColumns = (board) => {
  for(let i = 0; i < board.length; i++){
    if (!containsAll(getColumn(board, i))){ return false };
  }
  return true;
}

const checkRegions = (board) => {
  for(let x = 0; x < board.length; x+=3){
    let y = 0;
    if(!containsAll(getRegion(board, x, y)) ||
       !containsAll(getRegion(board, x, y += 3)) ||
       !containsAll(getRegion(board, x, y += 3))) {
         return false;
    }
  }
  return true;
}
