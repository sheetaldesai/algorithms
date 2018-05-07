/*
Given a sorted array, remove the duplicates in-place such that each element appear only once and return the new length.
Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Example:
Given nums = [1,1,2],
Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
It doesn't matter what you leave beyond the new length.
*/

function removeDuplicates(nums) {
    if (nums.length == 0) return 0;
    var i = 0;
    for (var j = 1; j < nums.length; j++) {
        console.log("i: j: ",i,j);
        if (nums[j] != nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}

var arr = [1,1,2];
var newLen = removeDuplicates(arr);
console.log("New Length: ", newLen);
console.log("Array after ", arr);