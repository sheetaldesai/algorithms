/* Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.

You may assume that each input would have exactly one solution and you may not use the same element twice.

Input: numbers={2, 7, 11, 15}, target=9
Output: index1=1, index2=2 */

function twoSum(arr, target) {
    var index1, index2;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > target) {
            continue;
        }
        index1 = i;
        for (var j=i+1; j<arr.length; j++) {
            if (arr[index1] === target - arr[j]) {
                return {"index1":index1, "index2":j}
            }
        }
    }
    return {"index1":undefined, "index2":undefined};
}

var arr = [11,6,7,13,2];
var indices = twoSum(arr, 13); 
console.log("indices: ", indices);

