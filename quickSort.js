const pivot = (arr, start=0, end=arr.length-1) => {
  // swap helper function
  const swap = (array, i, j) => {
    [array[i], array[j]] = [array[j], array[i]]
  }

  let pivot = arr[start];
  let swapIdx = start;
  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i)
      console.log('      swap: ' + arr)
    }
  }
  swap(arr, start, swapIdx)
  console.log('final swap: ' + arr)
  console.log('swap index: ' + swapIdx)
  return swapIdx
}

// pivot([4,8,2,1,5,7,6,3])

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if(left < right) {
    let pivotIndex = pivot(arr, left, right) 
    //left
    quickSort(arr, left, pivotIndex - 1)
    //right
    quickSort(arr, pivotIndex + 1, right)
  }
  console.log('sorted array: ' + arr)
  return arr;
}

quickSort([4,8,2,1,5,7,6,3])