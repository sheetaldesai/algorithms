function BST() {
    this.root = null
}

function BSTNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

//
// Add node(s) to the tree. This function
// accepts variable number of arguments.
// e.g. myBST.add(2,5,6,8)
//
BST.prototype.add = function () {
    
    for (var i=0; i<arguments.length; i++) {
        newNode = new BSTNode(arguments[i])
        
        if (!this.root) {
            this.root = newNode;
        }
        else {
            this.root.addNode(newNode);
        }
    }

    return this;
}

BSTNode.prototype.addNode = function(newNode){
    if (newNode.val >= this.val) {
        if (this.right) {
            return this.right.addNode(newNode)
        }
        else {
            this.right = newNode;
            return true;
        }
    } else {
        if (this.left) {
            return this.left.addNode(newNode)
        }
        else {
            this.left = newNode;
            return true;
        }
    }
}

//
// Returns size (number of nodes) of the tree
//
BST.prototype.size = function () {
    if (!this.root) {
        return 0
    } else {
        return this.root.size()
    }
}

BSTNode.prototype.size = function () {
    var leftSize = 0, rightSize = 0;
    if (this.left) {
        leftSize = this.left.size()
    } 
    if (this.right) {
        rightSize = this.right.size()
    }
    return 1 + leftSize + rightSize
}

//
// Returns height on the tree. 
//
BST.prototype.height = function () {
    if (!this.root) {
        return 0 
    } else {
        return this.root.height()
    }
}

BSTNode.prototype.height = function () {
    var leftHeight = 0, rightHeight = 0;
    if (this.left) {
        leftHeight = this.left.height()
    } 
    if (this.right) {
        rightHeight = this.right.height()
    }
    return 1 + Math.max(leftHeight,rightHeight)
}

//
// Bredth first traverse.
//
BST.prototype.BFTraverse = function () {
    if (!this.root) {
        return false 
    } else {
        return this.root.BFTraverse()
    }
}

BSTNode.prototype.BFTraverse = function () {
   
    console.log(this.val)

    if (this.left) {
        this.left.BFTraverse()
    } 
    if (this.right) {
        this.right.BFTraverse()
    }
    
    return
}

// 
// Find min value in a tree.
// The min value will always be on the left 
// side. Hence we only need to check the left
// side.
//
BST.prototype.min = function () {
    if (!this.root) {
        return false 
    } else {
        return this.root.min()
    }
}

BSTNode.prototype.min = function () {

    if (this.left) {
        return this.left.min()
    } 
    else {
        return this.val
    }
}

// 
// Find max value in a tree.
// The max value will always be on the right 
// side. Hence we only need to check the right
// side.
//
BST.prototype.max = function () {
    if (!this.root) {
        return false 
    } else {
        return this.root.max()
    }
}

BSTNode.prototype.max = function () {

    if (this.right) {
        return this.right.max()
    } 
    else {
        return this.val
    }
}

// 
// Returns true if the tree is balanced and false otherwise.
// Tree is considered balanced if the height difference beteen 
// left and right is <=1.
// 
BST.prototype.isBalanced = function() {
    if (!this.root) {
        return false 
    } else {
        return this.root.isBalanced()
    }
}

BSTNode.prototype.isBalanced = function() {
    var leftHeight = 0, rightHeight = 0;
    if (this.left) {
        leftHeight = this.left.height()
    } 
    if (this.right) {
        rightHeight = this.right.height()
    }
    var difference = Math.abs(leftHeight-rightHeight)
    if (difference >= 2) {
        return false
    } else {
        return true
    }
}

//
// Given a tree with 3 nodes, make it balanced. 
// 1->2->3 becomes 1->2<-3 
// 3<-2<-1 becomes 1->2<-3
// 5<-8->6 becomes 5<-6->8
//
BST.prototype.balanceTree = function () {
    if (!this.root) {
        return false 
    } else {
        return this.root.balanceTree()
    }
}

BSTNode.prototype.balanceTree = function () {
    if (this.left && this.left.left && !this.right) {
        // 3 nodes in a row on left side.
        // rotate right
        var temp = this.left;
        temp.right = this
        this.left = null
        return temp
    } else if (this.right && this.right.right && !this.left) {
        // 3 nodes in a row on left side.
        // rotate left
        var temp = this.right;
        temp.left = this
        this.right = null
        return temp
    } else if ()
}



var myBST = new BST()
//console.log(myBST)
myBST.add(1,2,3,4)
// console.log(myBST)

var size = myBST.size()
console.log("Size: ", size)

var height = myBST.height()
console.log("Height ", height)

//myBST.traverse()

var min = myBST.min() 
console.log("Min: " + min)

var max = myBST.max() 
console.log("Max: " + max)

var isBalanced = myBST.isBalanced()
console.log("Balanced: ", isBalanced )








