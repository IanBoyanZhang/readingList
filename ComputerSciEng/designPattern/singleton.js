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
