Array.prototype.bubbleSort = function () {
    if (this.length <= 1) {
        return;
    }

    var swaps = -1;

    while(swaps != 0) {
        swaps = 0;

        for (var i = 0; i < this.length; i++) {
            if (this[i] && this[i+1] && this[i] > this[i+1]) {
                var temp = this[i];
                this[i] = this[i+1];
                this[i+1] = temp;
                swaps++;
            }
        }
        //console.log("Swaps: ", swaps)
    }
}

var arr = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
arr.bubbleSort();
console.log("Sorted array: ", arr);