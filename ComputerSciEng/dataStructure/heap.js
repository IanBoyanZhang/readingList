/**
 * Heap implementation in JS
 * minHeap
 * No two same value in data structure
 */
var Heap = function() {
  this.array = [];
};

Heap.prototype.push = function(num) {
  this.array.push(num);
  this.bubbleup(num);
};

Heap.prototype.pop = function() {
  var result = this.array[0];
  var end = this.array.pop();
  // If there are any elements left, put the end element at the start, and let it sink down
  if (this.array.length > 0) {
    this.array[0] = end;
    this.sinkDown(0);
  }
  return result;
};

Heap.prototype.bubbleup = function(num) {
  var pElem, pIdx;
  var len = this.array.length;
  if (!len) { this.array[0] = num; return; }
  n = len - 1;
  while (n > 0) {
    pIdx = Math.floor((n - 1)/2);
    pElem = this.array[pIdx];
    if (pElem > num) {
      // swap
      this.array[pIdx] = num;
      this.array[n] = pElem;
      n = pIdx;
    } else {
      break;
    }
  }
};

Heap.prototype.sinkDown = function(n) {
  // Look up the target element and its score
  var len = this.array.length,
  element = this.array[n];
  
  for (;;) {
    // Compute the indices of the child elements 
    var child2N = (n+1) * 2, child1N = child2N - 1;
    // This is used to store the new position of the element
    // if any
    var swap = null;
    // If the first child exists (is inside the array) ...
    if (child1N < len) {
      // look it up and compute its score
      if (this.array[child1N] < element) {
        swap = child1N;
      }
    }
    if (child2N < len) {
      // look it up and compute its score
      if (this.array[child2N] < (swap === null ? element : this.array[child1N])) {
        swap = child2N;
      }
    }
    if (swap === null) break;
    this.array[n] = this.array[swap];
    this.array[swap] = element;
    n = swap;
  }
};

Heap.prototype.remove = function(node) {
  var len = this.array.length;
  for (var i = 0; i < len; i+=1) {
    if (this.array[i] !== node) continue;
    // When it is found, the process seen in 'pop' is repeated 
    // to fill up the hole

    var end = this.array.pop();
    // If the element we poped was the one we needed to remove, we are done
    if (i === len - 1) break;

    this.array[i] = end;
    this.bubbleup(i);
    this.sinkDown(i);
    break;
  }
};

Heap.prototype.size = function() {
  return this.array.length;
};

var heap = new Heap();
var arr = [10, 3, 4, 8, 2, 9, 7, 1, 2, 6, 5];
console.log("This is the length", arr.length);
[10, 3, 4, 8, 2, 9, 7, 1, 2, 6, 5].forEach(function(x) {
  heap.push(x);
});

heap.remove(2);
while (heap.size() > 0) {
  console.log(heap.pop());
}
