// first step for mergeSort
let merge = (arr1,arr2) => {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) { 
      results.push(arr1[i]);
      i++;
    }
    else {
      results.push(arr2[j]);
      j++;
    }
  }
  
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j])
    j++;
  }

  console.log(results)
  return results;
}

// merge([1,10,50], [2,14,99,100])

let mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0,mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

mergeSort([3,5,2,6,87,600,23,45,25,37,12])