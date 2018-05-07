/**
 * Minimum Heap - root is the smallest element.
 * Maximum Heap - Root is the largest element.
 * For a parent,  left child = i * 2 and right child is at i * 2 + 1
 * A parent is at Math.floor(i/2)
 */

let minHeap = function(){
    var heap = [undefined];

    this.insert = function(val) {
        // Insert new elemen at the end of the array.
        //console.log(this);
        heap.push(val);

        
        var index = heap.length - 1;
        // If child val is less that the parent then swap the child with parent. 
        // Continue this operation till we reach the root nood.
        while (heap[index] < heap[(Math.floor(index/2))] && index > 0) {
            // swap child with the parent.
            var temp = heap[index];
            heap[index] = heap[(Math.floor(index/2))];
            heap[(Math.floor(index/2))] = temp;
            index = (Math.floor(index/2));
            //console.log("index: ", index);
        }

        return heap;
    }

    this.remove = function() {
        // Get smallest element:
        [heap[1],[heap[heap.length -1]]] = [[heap[heap.length -1]], heap[1]];
        console.log(heap);
        var smallest = heap.pop();
        var index = 1;
        while(index <= heap.length - 1) {
            if (heap[index*2] < heap[index * 2 +1]) {
                [heap[index],heap[index*2]] = [heap[index*2],heap[index]];
                index = index*2;
            } else {
                [heap[index],heap[index*2 + 1]] = [heap[index*2 + 1],heap[index]];
                index = index*2 + 1;
            }
        }

        console.log(heap);
        return smallest;

    }
}

var myHeap = new minHeap();

var arr = [20,3,56,10,5];
for (var i = 0; i < arr.length; i++) {
    var heap = myHeap.insert(arr[i]);
    
}

console.log(heap);

var smallest = myHeap.remove();
console.log("Smallest: ", smallest);
console.log(heap);