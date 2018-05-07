//
// Given an array of sorted (increasing order) unique integer numbers wirte an algorithm to create a binary search tree with minimum height
//

function BST() {
    this.root = null
}

function BSTNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

BST.prototype.createMinimumBST = function(arr) {
    //
    // Middle element of the sorted array will be the root of the tree
    //
    
    if (this.root) {
        return false;
    } 

    var mid = Math.floor(arr.length/2);
    this.root = new BSTNode(arr[mid]);
    console.log(this.root.val);
    this.root.left = this.root.createMinimumBST(arr, 0, mid-1);

    this.root.right = this.root.createMinimumBST(arr, mid+1, arr.length-1);

}

BSTNode.prototype.createMinimumBST = function(arr, start, end) {
    console.log("Start end ", start,end);
    if (start > end) {
        return false;
    }

    var mid = Math.floor((start+end)/2);
    var n = new BSTNode(arr[mid]);
    n.left = n.createMinimumBST(arr, start, mid-1);
    n.right = n.createMinimumBST(arr, mid+1, end)

    return n;
}

BST.prototype.BFTraverse = function () {
    if (!this.root) {
        return false 
    } else {
        return this.root.BFTraverse()
    }
}

BSTNode.prototype.BFTraverse = function () {

    if (this.left) {
        this.left.BFTraverse()
    } 
    console.log(this.val)
    if (this.right) {
        this.right.BFTraverse()
    }
}

var arr = [1,2,3,4,5];
var myBST = new BST();
myBST.createMinimumBST(arr);
console.log(myBST);
myBST.BFTraverse();