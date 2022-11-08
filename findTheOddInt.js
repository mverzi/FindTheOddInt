/**
 * This function takes an array of integers, and finds the one that appears an odd number of times.
 * @param {number array} arr 
 * @returns The number in the array that appears on odd amount of times
 */
function findOdd(arr) {
    let count = 0
    for(let i = 0; i < arr.length; i++){
      for(let j = 0; j < arr.length; j++){
        if(arr[i] === arr[j]){
          count++
        }
      }
      if(count % 2 != 0){
        return arr[i]
      }
    }
  }

  /**
 * This function takes an array of integers, and finds the one that appears an odd number of times.
 * @param {number array} A
 * @returns The number in the array that appears on odd amount of times
 */
  function findOddOneLine(A) {
    return A.reduce((a,b) => a ^ b)
  }