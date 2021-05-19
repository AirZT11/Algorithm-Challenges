function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (let j = i - 1;  j >= 0 && arr[j] > currentVal; j--) {
      arr[j+1] = arr[j]
      arr[j] = currentVal;
    }
    
  }
  console.log(arr)
  return arr;
}

insertionSort([2,1,9,76,4])

// first iteration of first forloop
// currentVal = 1
//    first iteration of second forloop
//    j = 0; 0 >= 0 && 2 > 1; j--
//    1 = 2 // arr[j+1] = arr[j]
//    2 = 1 // arr[j] = currentVal;
//    j = -1; -1 >= 0 // break out of loop because conditional is not met
// arr = [1,2,9,76,4]

    // second iteration of first forLoop
    // currentVal = 9
    //    first iteration of second forLoop
    //    j = 1; 1 >= 0 && 2 > 9 // break out of loop because conditional is not met 
    // arr = [1,2,9,76,4]