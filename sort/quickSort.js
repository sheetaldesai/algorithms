Array.prototype.quickSort = function() {
    if (this.length <= 1) {
        return;
    }

    var swaps = -1;
    var wall = 0;
    var pivot = this[this.length-1];

    while(swaps != 0) {
        swaps = 0;

        for (var i = wall; i < this.length; i++) {
            if ( this[i] <= pivot) {
                var temp = this[i];
                this[i] = this[wall];
                this[wall] = temp;
                swaps++;
                wall++;
            }
            console.log(arr);
        }
        console.log(`arr: ${arr} wall:${wall} swaps:${swaps}`);
    }
}

var arr = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
arr.quickSort();
console.log("Sorted array: ", arr);
    
