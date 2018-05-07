/* Problem: https://leetcode.com/problems/zigzag-conversion/description/ */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var arr = [];
    var row = 0;
    var direction = "down";
    
    for (var i=0; i<s.length; i++) {
        
        if (arr[row] == undefined) {
            arr[row] = s[i];
        } else {
            arr[row] += s[i];
        }
        
        
        if (row == numRows - 1) {
            direction = "up";
        }
        if (row == 0) {
            direction = "down";
        }
        
        if (direction == "down") {
            row++;
        } else {
            row --;
        }
    }
    
    console.log(arr);
    
    return arr.join('');
    
};

console.log(convert("PAYPALISHIRING", 3));
