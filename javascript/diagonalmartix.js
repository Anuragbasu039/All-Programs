function diagonalmatrix(arr)
{
  let leftdiagonal = 0;
  let rightdiagonal = 0;
  let n = arr.length;
  
  for(let i=0; i<n; i++)
  {
    leftdiagonal = leftdiagonal+arr[i][i];
    rightdiagonal = rightdiagonal+arr[i][n-1-i];
  }
  return Math.abs(leftdiagonal - rightdiagonal);
}
let A = [
  [1,2,3],
  [4,5,6],
  [9,8,9]
];
console.log(diagonalmatrix(A));