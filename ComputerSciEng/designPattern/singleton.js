/**
 * Singleton sample in JS
 *
 */

var Singleton = (function() {
  var instance;

  function createInstance() {
    var object = new Object("I am the instance");
    return object;
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

function run() {
  var instance1 = Singleton.getInstance();
  var instance2 = Singleton.getInstance();
  
  console.log("Same instance? " + (instance1 === instance2));
}

run();

/**
 * Namespace sample
 *
 */
var Namespace = {
  Util: {
    util_method1: function() {},
    util_method2: function() {}
  },
  Ajax: {
    ajax_method: function() {}
  },
  some_method: function() {}
};

Namespace.Util.util_method1();


/**
 * Page specific code
 *
 */
Namespace.homepage = {
  init: function() {},
  method1: function() {},
  method2: function() {}
};

Namespace.contactpage = {
  init: function() {},
  method1: function() {},
  method2: function() {}
};

Namespace.pageutil = {
  getPageName: function() {
  }
};

var pageName = Namespace.pageutil.getPageName();
window.onload = Namespace[pageName].init;


/**
 * Singleton with a cached static property
 *
 */
function User() {
  if (typeof User.instance === 'object') {
    return User.instance;
  }

  this.firstName = 'John';
  this.lastName = 'Doe';

  // cache
  User.instance = this;

  // implicit return
  // return this
}

/**
 * Singleton with a closure
 *
 */
function User() {
  // the cached instance
  var instance;

  // rewrite the constructor
  User = function() {
    return instance;
  };

  // carry over the prototype
  User.prototype = this;

  // the instance
  instance = new User();

  // reset the constructor pointer
  instance.constructor = User;

  // all the functionality
  instance.firstName = 'John';
  instance.lastName = 'Doe';

  return instance;
}
