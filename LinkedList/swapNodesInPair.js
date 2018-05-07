// Given 1->2->3->4, you should return the list as 2->1->4->3.

function SSL () {
    this.head = null;
}

function Node (val) {
    this.val = val;
    this.next = null;
}

SSL.prototype.add = function(arr) {
    var curr = this.head;
    for (var i=0; i < arr.length; i++) {
        if (curr) {
            curr.next = new Node(arr[i]);
            curr = curr.next;
        } else {
            this.head = new Node(arr[i]);
            curr = this.head;
        }
    }
}

SSL.prototype.print = function() {
     var curr = this.head;
     var str = "";
     while(curr) {
        str += curr.val + "->";
        curr = curr.next;
     }
     console.log(str);
}
/**
 * 1-2-3-4
 * 2-1-4-3
 * 
 * 2-1 3-4
 */
SSL.prototype.swapNodesInPairs = function() {
    var curr = this.head;
    var temp = null;

    while (curr && curr.next) {
        
        var temp = curr.next.next;
        curr.next.next = curr;
        if (curr == this.head) {
            this.head = curr.next;
        }
        if (temp) {
            curr.next = temp.next;
        } else {
            break;
        }
        curr = temp;
    }
}

var arr = [1,2,3,4];
var mySSL = new SSL();
mySSL.add(arr);
mySSL.print();
mySSL.swapNodesInPairs();
mySSL.print();

