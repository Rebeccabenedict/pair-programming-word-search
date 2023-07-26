const wordSearch = function(matrix, word) {
  let answer = false;
  let horizontal = matrix.map(ls => ls.join(''));

  for (const index of horizontal) {
    if (index.match(word)) {
      answer = true;
    }
  }
};
  if (!answer) {
    let result = [];
    for (let j = 0; j < matrix.length; j++) {
      for (let i = 0; i < matrix[j].length; i++) {
        if (!Array.isArray(result[i])) {
          result[i] = [];
        }
        result[i][j] = matrix[j][i];
      }
    }
    let vertical = result.map(ls => ls.join(''));
    for (const index of vertical) {
      if (index.match(word)) {
        answer = true;
      }
    }
  };