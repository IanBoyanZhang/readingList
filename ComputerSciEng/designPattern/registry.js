// Object.create(null) in Node will create an object that 
// does not inherit from Object.prototype. This is an ES5 feature that has landed in 
// many browsers already
var registry = (function() {
  Registry = function() {
    this._values = Object.create(null);
  };

  Registry.prototype.registr = function(name, value) {
    this._values[name] = value;
  };
})();
