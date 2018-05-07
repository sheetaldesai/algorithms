/** Merge sort: complexity nlogn */

function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    var mid = Math.floor(arr.length/2);
    console.log("mid: ", mid);
    var left = arr.slice(0,mid);
    console.log("left: ", left);
    var right = arr.slice(mid);
    console.log("right: ", right);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    var result = [];
    var leftIndex = 0, rightIndex = 0;

    console.log("merge left right ",left, right);
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex]);
            leftIndex++
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    console.log("merge result: ", result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex)))

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));

}

var arr = [6,4,8,3,1,9];
var result = mergeSort(arr);
console.log("Sorted array: ", result);

// var str = "sheetal";
// var strArr = str.split("");
// var res = mergeSort(strArr);
// var sortedStr = res.join("");
// console.log("sorted string arr ", res);
// console.log("sorted string  ", sortedStr);