function DLL () {
    this.head = null;
    this.tail = null;
}

function DllNode (val) {
    this.val = val;
    this.next = null;
    this.prev = null;
}

DLL.prototype.display = function(){
    var curr = this.head;
    var str = ""
    while (curr) {
        str += curr.val + "  ";
        curr = curr.next;
    }
    console.log(str)
}

DLL.prototype.add = function(val) {
    node = new DllNode(val)

    if (this.head) {
        var temp = this.tail;
        this.tail = node;
        node.prev = temp;
        temp.next = node;
    }
    else {
        this.head = node;
        this.tail = node;
    }
}

DLL.prototype.insertAfter = function(valBefore, val) {
    node = new DllNode(val) 
    if (this.head) {
        var curr = this.head;
        while(curr) {
            if (curr.val === valBefore) {
                if (curr === this.tail) {
                    this.tail = node;
                    node.prev = curr;
                    curr.next = node;
                }
                else {
                    var next = curr.next;
                    curr.next = node;
                    node.prev = curr;
                    node.next = next;
                    next.prev = node;
                }
                return true;
            }
            curr = curr.next;
        }
        return false;
    }
    else {
        return false;
    }
}

DLL.prototype.remove = function (val) {
    if (!this.head) {
        return false;
    }

    var curr = list.head;
    while(curr) {
        if (curr.val === val) {
            var next = curr.next;
            var prev = curr.prev;

            if (!next && !prev) {
                this.head = null
                this.tail = null
                return true;
            }
            if (!next) {
                this.tail = prev;
                prev.next = null;
            }
            else if (!prev) {
                this.head = next;
                next.prev = null;
            }
            else {
                prev.next = next;
                next.prev = prev;
            }
        }
    }
}

var myDLL = new DLL()
console.log(myDLL)
myDLL.add(1)
myDLL.add(2)
myDLL.add(3)
myDLL.insertAfter(3,4)
myDLL.insertAfter(1,1.5)
myDLL.head

myDLL.display()