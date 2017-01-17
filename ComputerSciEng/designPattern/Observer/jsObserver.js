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

Subject.prototype.addObserver = function(observer) {
  this.observers.add(observer);
};

Subject.prototype.removeObserver = function(observer) {
  this.observers.removeAt( this.observers.indexOf(observer, 0) );
};

Subject.prototype.notify = function(context){
  var observerCount = this.observers.count();
  for (var i = 0; i < observerCount; i+=1) {
    this.observers.get(i).update(context);
  }
};
