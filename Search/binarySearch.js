Array.prototype.binarySearch = Array.prototype.binarySearch || function(target) {

    var left = 0;
    var right = this.length - 1;
    
    while(left <= right) {
        var mid = left + Math.floor((right-left)/2);

        if (this[mid] === target) {
            return mid;
        }
        if (this[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1; 
        }
    }
    
    return -1;
}

var arr = [-5, 0, 5, 6];
var index = arr.binarySearch(5);
console.log(index);
index = arr.binarySearch(0);
console.log(index);
index = arr.binarySearch(9);
console.log(index);

arr = [];
index = arr.binarySearch(0);
console.log(index);

arr = [0];
index = arr.binarySearch(0);
console.log(index);