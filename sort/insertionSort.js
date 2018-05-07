Array.prototype.insertionSort = function () {
    if (this.length <= 1) {
        return;
    }

    for (var i = 1; i < this.length; i++) {
        var temp = this[i];

        for (var j = i-1; j >= 0; j--) {
            if (this[j] > temp) {
                this[j+1] = this[j];
            } else {
                break;
            }
        }

        this[j+1] = temp;
    } 
}

var arr = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
arr.insertionSort();
console.log("Sorted array: ", arr);