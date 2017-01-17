/*var MY_GLOBAL = {
  id: 0,
  nextId: function() {
    MY_GLOBAL.id+=1;
    return MY_GLOBAL.id;
  }
};

var MY_GLOBAL = {
  id: 0,
  nextId: function() {
    var self = MY_GLOBAL;
    return function() {
      self.id += 1;
      return self.id;
    }();
  }
};*/

// Multiple methods
// Tying binding
var MY_GLOBAL = {
  id: 0,
  nextId: function() {
    return this.id += 1;
  }
};
MY_GLOBAL.nextId.bind(MY_GLOBAL);

var vehicle = {
  getModel: function() {
    console.log("The model of this vehicle is..", + this.model);
  }
};

var car = Object.create(vehicle, {
  "id": {
    value: MY_GLOBAL.nextId(),
    // Writable: false, configurable: false by default
    enumerable: true
  },

  "model": {
    value: "Ford",
    enumerable: true
  }
});

// console.log(car.model);

console.log(MY_GLOBAL.nextId());
console.log(MY_GLOBAL.nextId());
console.log(MY_GLOBAL.nextId());
