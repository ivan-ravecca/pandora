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

/*
Given an unsorted array or numbers, return it sorted but even numbers should remain in the same position on the original
*/
function sortArray(array) {
  const odds = array.filter((number) => number % 2).sort((a, b) => a - b);
  return array.map((number) => number % 2 ? odds.shift() : number);
}

/* 
We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) 
and outputs a list of the sorted numbers in the range that fulfills the property described above.
*/
function sumDigPow(a, b) {
  var out = [];
  for(var i = a; i <= b; i++) {
    if (i > 0) {
      var sum = Array.from(i.toString()).map(Number).reduce((acc, curr, index) => {
        return acc + Math.pow(curr, index + 1);
      }, 0);
      if (sum === i) {
          out.push(i);
      }
    }
  }
  return out;
}
