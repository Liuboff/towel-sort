
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix==undefined || matrix.length==0){
        return [];
    }
    let newMatrix = [];
    for(let i=0; i<matrix.length; i++){
        if (i%2===0){
            newMatrix = newMatrix.concat(matrix[i]);
        }else newMatrix = newMatrix.concat(matrix[i].reverse());
    }
  return newMatrix;
}
