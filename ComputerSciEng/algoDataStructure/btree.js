/**
 * JS B tree implementation
 *
 */

/**
 * A B Tree 
 * All leaves are on the bottom level
 * All internal nodes (except perhaps the root node) have at least ceil(m/2) (non empty) children
 * The root node can have as few as 2 children if it is an internal node, and can obviously have no children if the root node is a leaf (that is, the tree 
 * consists only of the root node)
 * Each leaf node (other than the root node if it is a leaf) must contain at least ceil(m/2) - 1 keys
 *
 * Order(m) of B tree defines (max and min) no. of children for a particular node
 * Degree(t) of B tree defines (max and min) no. of keys for a particular node. Degree is defined as minimum degree of B-tree
 * A B-tree of order m 
 */

/**
 * Basic operations on B-trees
 *
 */

// Creating an empty B-tree
// B Tree create requires O(1) disk operations and O(1) CPU time

var BTree = function(order) {
  this.order = order;               // number of keys stored in the current node
//  this.isLeaf = isLeaf;
  this.values = [];                 // array holde the 3 keys
  this.children = [];               // array of fake pointers (record numbers)
  // this.parent = undefined;
};

BTree.prototype.insert = function(value, comparator) {
  // Check if there is an open position
  var slot = this.openSlotPos(value);
  if (slot !== null) {
    this.insert.call(this.children[slot], value);
  } else {
    this.values.push(value);
    this.sortNode(comparator);
    if (this.isOverloaded()) {
      this.split();
    }
  }
};

BTree.prototype.traverse = function(callback) {
  callback(this);
  for (var i = 0, len = this.children.length; i < len; i+=1) {
    this.traverse.call(this.children[i], callback);
  }
};

BTree.prototype.contains = function(targetVal) {
  var found = false;
  this.traverse(function(node) {
    for (var i = 0, len = node.values.length;  i < len; i+=1) {
      found = found || targetVal === node.values[i];
    }
  });
  return found;
};

BTree.prototype.search = function(targetVal) {
  var rtnNode;
  this.traverse(function(node) {
    for (var i = 0, len = node.values.length; i < len; i+=1) {
      if (node.values[i] === targetVal) {
        rtnNode = node;
      }
    }
  });
  return rtnNode;
};

// Insert, first do a search for it in the B-tree if the item is not in the B tree already, this unsuccessful search will end at a leat. 
// If there is a room in this leaf, just insert the new item here. Not that this may require that some existing keys be moved one to the 
// right to make room for the new item.
// Then the node has no room, then it must split with about half of the keys going into a new node to the right of this one. The median (middle) key is moved
// up into the parent node 


BTree.prototype.openSlotPos = function(value) {
  var hasOpenSlot = (this.children.length - 1) > this.values.length;
  if (hasOpenSlot || this.children.length === 0) {
    return null;
  }
  else {
    for (var i = 0, len = this.values.length; i < len; i+=1) {
      if (value < this.values[i]) {
        return i;
      }
    }
    return len;
  }
};


// Traversing through whole tree
BTree.prototype.print = function() {
  var results = [];
  this.traverse(function(node) {
    results.push(node.values);
  });
  return JSON.stringify(results);
};

// Numerical Sort
BTree.prototype.sortNode = function(comparator) {
/*  this.values.sort(function(a, b){
    return a - b;
  });*/
  this.values.sort(comparator);
};

BTree.prototype.isOverloaded = function() {
  return this.values.length === this.order;
};

BTree.prototype.split = function() {
  // tracking the median item
  var leftNode = new BTree(this.order);
  var rightNode = new BTree(this.order);

  var med = Math.ceil(this.order/2) - 1;
  leftNode.values = this.values.splice(0, med);
  var median = this.values.splice(0, 1);
  rightNode.values= this.values.splice(0);
  
  for (var i = 0, len = this.children.length; i < )
};

// local test utility

var Tree = new BTree(5);
Tree.insert("C");
Tree.insert("N");
Tree.insert("G");
Tree.insert("A");
Tree.insert("H");
// console.log(Tree.openSlotPos(10));
console.log(Tree.print());
