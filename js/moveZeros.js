/*Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

*moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

var moveZeros = function (arr) {
    for (let index = 0; index < arr.length; index++) {
        arr.push(arr.splice(arr.indexOf(0), 1)[0]);        
    }
  return arr;
}

moveZeros([false,1,0,1,2,0,1,3,"a"]);