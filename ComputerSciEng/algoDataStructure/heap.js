/**
 * Heap implementation in JS
 * minHeap
 * No two same value in data structure
 */
var Heap = function() {
  this.array = [];
};

Heap.prototype.insert = function(num) {
  this.array.push(num);
  this.bubbleup(num);
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
