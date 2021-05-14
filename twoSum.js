// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// brute force method = On^2
// var twoSum = function(nums, target) {    
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j]
//             }
//         }
//     }
// };

// better solution. Using an object to store previous numbers and check that against the current element to see if it sums up to the target
var twoSum = (nums, target) => {
    let prevValues = {};
    for (let i = 0; i < nums.length; i++) {
        let currentNum = nums[i]
        let neededValue = target - currentNum;
        let index2 = prevValues[neededValue];
        if (index2 != null) {
            return [index2, i]
        } else {
            prevValues[currentNum] = i
        }
    }
}