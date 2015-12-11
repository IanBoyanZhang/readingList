/**
 * My own implementation
 *
 */
var BinaryHeap = function(scoreFunction) {
  this.content = [];
  this.scoreFunction = scoreFunction;
};

BinaryHeap.prototype.push = function(element) {
  this.content.push(element);
};

// 0 
// 1, 2
// 3, 4, 5, 6
// 7, 8, 9, 10, 11, 12, 13, 14
BinaryHeap.prototype.bubbleUp = function(n) {
  var element = this.content[n];
  if (element === undefined) {
    return;
  }

  var parentIdx = getParentIdx(n);
  var parentN = getParent(parentIdx);

  var isLarger = function(pNode, elem) {
    return pNode > elem;
  };
  var getParent = function(currIdx) {
    var pId = Math.floor((currIdx-1)/2);
    return this.content[pIdx];
  };
  var getParentIdx = function(currIdx) {
    return Math.floor((n-1)/2);
  };

  while (n > 0 && isLarger(parentN, element)) {
    // swap elements
    parentN = this.content[parentIdx];
    this.content[parentIdx] = n;
    this.content[n] = parentN;
    n = parentIdx;
  }
};

BinaryHeap.prototype.sinkDown = function(n) {
  var len = this.content.length;
  if (n >= len) { return; }

  var element = this.content[n];
  
  // if beyond the content boundry
};

