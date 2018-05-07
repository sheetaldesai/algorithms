function SSL () {
    this.head = null;
}

function Node (val) {
    this.val = val;
    this.next = null;
}

SSL.prototype.findNthFromLast = function(num) {
    var current = this.head;
    var count = 0,
        slow = null,
        val = null;

    while (current) {
        count++;
        if (count == num) {
            slow = count;
        }
        if (slow) {
            val = current.val;
        }
        current = current.next;
    }

    return val;
}

SSL.prototype.createList = function (numNodes) {

    this.head = new Node(Math.floor(Math.random() * 100));
    var current = this.head
    for (var i=1; i<numNodes; i++) {
        current.next = new Node(Math.floor(Math.random() * 100))
    }
}

SSL.prototype.reverse = function() {
    if (!this.head || this.head.next === null) {
        return;
    }

    var curr = this.head;
    var prev = null;

    while(curr) {
        var nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }

    this.head = prev;

}

