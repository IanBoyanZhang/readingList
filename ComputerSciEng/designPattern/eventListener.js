// Write your own event listener

var eventSys = function() {
  var eventQueue = [];

  /*
   * @param name: string
   *
   */
  var register = function(name, task) {
    var payload = {};
    payload[name] = task;
    eventQueue.push(payload);
  };

  // Listening to certain event
  var on = function(taskname, callback) {
    if (eventQueue[currIdx].name === taskname) {
      callback();
    }
  };

  return {
    on: on,
    register: register,
  };

};
