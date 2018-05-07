// Given [1,2,[3,4],6,[7]] return [1,2,3,4,6,7]. Do the operation in place

function myList (arr) {
    this.arr = arr

    myList.prototype.printArr = function () {
        console.log(this.arr);
    }

    myList.prototype.flatten = function () {
        var newArr = this.arr;
        
        for  (var i = 0; i < newArr.length; i++) {
            var innerLen = newArr[i].length - 1; 
            if (Array.isArray[newArr[i]]) {
                console.log("Found inner array " + newArr[i])
                newLen = newArr.length + innerLen -1;
                for (var j=newLen; j<= newArr.length-1; j--) {
                    newArr[j] = newArr[j-i-1]
                }
                for (var j= i+innerLen; j>i; j--) {
                    newArr[j] = newArr[i][j-i]
                }
                newArr[i] = newArr[i][0];
            }
        }
        return newArr;
    }
}

myArr = new myList([1,2,[3,4],5]);
myArr.printArr();
flattenArr = myArr.flatten();
console.log("Flatten array " + flattenArr);

myArr = new myList([1,2,[3,4,9,0],5,[7,11,12]]);
myArr.printArr();
flattenArr = myArr.flatten();
console.log("Flatten array " + flattenArr);
myArr.printArr()