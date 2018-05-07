function selectionSort(arr) {
    if (arr.length <= 1) {
        return;
    }

    console.log("Sorting array ", arr);
    console.log(`arr length ${arr.length}`);
    for (var i=0; i<arr.length; i++) {
        var min = i;
        for (var j=i+1; j<arr.length; j++) {
            console.log(j, arr[j]);
            if (arr[j] < arr[min]) {
                min = j;
                console.log("Min : ", j);
            }
        }

        if (i != min) {
            //
            // swap elements at index i and min.
            //
            var temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
            console.log(`Arr after swapping ${i} and ${min} is ${arr}`);
        }
    }
}

var arr = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
selectionSort(arr);
console.log("Sorted array: ", arr);