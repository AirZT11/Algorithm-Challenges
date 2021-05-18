// try writing your own selection sort algorithm

// utilize a swap function to swap indeces when you find the minimum value

// Store the first element as the smallest element you've seen so far
// Compare this item to the next item in  the array until you find the smallest item
//  If the next item is smaller, then store the next item as the smallest element
//  If not smaller, you keep going until you find the new smallest element and save that as the minimum value
//    You're saving the index of the smallest element, not the actual value. 
//    This is so you can swap the indices 
// Repeat this with the next element until the the array is sorted

let selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minVal = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minVal] > arr[j]) {
        minVal = j;
      }
    }
    if (i !== minVal) {
      let temp = arr[i];
      arr[i] = arr[minVal];
      arr[minVal] = temp;
    }
  }
  console.log(arr)
  return arr;
}


let arr = [3, 2, 13, 6, 35, 1, 24]
selectionSort(arr)