// Prototypal Inheritance by Douglas Crockford
'use strict';
// Object.create
// Pass into it an object that you want to inherit from
// Returns a new object that inherits from the object you passed into it
if (typeof Object.create !== 'function') {
  Object.create = function(o) {
    function F() {
    
    }
    
    // F constructor inheritence from o
    F.prototype = o;
    return new F();
  };
}

// Inheritence pattern
function inheritPrototype(childObj, parentObj) {
  var copyOfParent = Object.create(parentObj);          // copyOfParent now has all properties and methods of parentObj

  // Whenever we overwrite an object's prototype, we overwrite an object's prototype (object's) constructor property
  copyOfParent.constructor = childObj;

  // childObj inherent everything from 
  childObj.prototype = copyOfParent;

}

// Test inheritence pattern
var childObject = {};
var parentObject = function() {
  this.num = 0;
};

parentObject.prototype.addOne = function() {
  this.num += 1;
};


inheritPrototype(childObject, parentObject);

