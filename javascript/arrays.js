/*
Given a list lst and a number N, create a new list that contains each number of list at most N times without reordering. 
For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2]
*/
function countOccurrences(arr, number) {
  return (arr.filter(function (el) {
    return el === number;
  })).length;
}
function deleteNth(arr,n){
  var output = [];
  if(n === 0) {
    return [];
  }
  for (var i = 0; i < arr.length; i ++) {
    if(countOccurrences(output, arr[i]) < n) {
      output.push(arr[i]);
    } 
  }
  return output;
}
