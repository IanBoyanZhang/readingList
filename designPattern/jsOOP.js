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

console.log(childObject.constructor);


// Exploring Subclassing
// SuperClass constructor
var Vehicle = function Vehicle (wheels) {
  this.wheels = wheels;
  this.speed = 0;
};

// Instance methods
Vehicle.prototype.go = function(speed) {
  this.speed = speed;
  this.speed2 = speed;                      // Decorator?
};

// Subclassing
var Car = function Car(color) {
  this.color = color;
  this.light = false;
};
Car.prototype = new Vehicle(4);             // construct prototype chain

// Subclass prototype methods
Car.prototype.beam = function() {
  this.light = !this.light;
};

var cab = new Car("yellow");
cab.go(40);
cab.beam();

console.log(cab);
console.log(cab instanceof Car);
console.log(cab instanceof Vehicle);

// Exploring subclass pattern using Object.create

var Plane = function Plane(color) {
  this.color = color;
};

// Reveal the prototype chain
function create(parent) {
  var F = function() {};
  F.prototype = parent;
  return new F();
}

var masterObject = { a: "masterObject value" };

var object1 = create(masterObject);
var object2 = create(masterObject);
var object3 = create(masterObject);

object3.a = "overriden value";
console.log(object1);
console.log(object2);
console.log(object3);

console.log(object1.a);
console.log(object2.a);
console.log(object3.a);

masterObject.a = "new masterObject value";
console.log(object1.a);
console.log(object2.a);
console.log(object3.a);
