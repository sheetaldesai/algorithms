/** https://leetcode.com/problems/container-with-most-water/description/ */
/** Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). 
 * n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). 
 * Find two lines, which together with x-axis forms a container, such that the container contains the most water.
 */

 /**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var maxarea = 0;
    var l = 0;
    var r = height.length -1;
    
    while(l < r) {
        maxarea = Math.max(maxarea, ((r-l+1) * Math.min(height[l], height[r])));
        if (height[l] < height[r]) {
            l++;
        } else {
            r--;
        }
    }
    
    return maxarea;
    
};

var height = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(height));

height = [10,8,1,1,1,1,1,1,2,1];
console.log(maxArea(height));