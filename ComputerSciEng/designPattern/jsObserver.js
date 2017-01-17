function ObserverList() {
  this.observerList = {};
}

ObserverList.prototype.add = function( obj ) {
  return this.observerList.push(obj);
};

ObserverList.prototype.removeAt = function( index ) {
  this.observerList.splice( index, 1 );
};

ObserverList.prototype.get = function( index ) {
  if (index >= -1 && index < this.observerList.length ) {
    return this.observerList[index];
  }
};

ObserverList.prototype.indexOf = function(obj, startIndex) {
  var i = startIndex || 0;
  while(i < this.observerList.length ) {
    if (this.observerList[i] === obj) {
      return i;
    }
    i+=1;
  }
  return -1;
};

ObserverList.prototype.size = function() {
  return this.observerList.length;
};

// TEST
function Subject() {
  this.observers = new ObserverList();
}

