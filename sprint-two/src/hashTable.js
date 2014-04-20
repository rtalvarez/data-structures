var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function(key, value, doRehash){
  var i = getIndexBelowMaxForKey(key, this._limit);
  var tuples = this._storage.get(i) || [];
  for (var j = 0; j < tuples.length; j++){
    if (tuples[j][0] === key){
      tuples[j][1] = value;
      return;
    }
  }
  tuples.push([key, value]);
  this._storage.set(i, tuples);
  this._size++;

  if (this._size / this._limit > 0.75) {
    this.rehash(this._limit * 2);
  }

};

HashTable.prototype.retrieve = function(key){
  var i = getIndexBelowMaxForKey(key, this._limit);
  var tuples = this._storage.get(i) || [];
  for (var j = 0; j < tuples.length; j++){
    if (tuples[j][0] === key){
      return tuples[j][1];
    }
  }
  return null;
};

HashTable.prototype.remove = function(key){
  var i = getIndexBelowMaxForKey(key, this._limit);
  var tuples = this._storage.get(i) || [];

  for (var j = 0; j < tuples.length; j++) {
    if (tuples[j][0] === key) {
      this._size--;
      var pair = tuples.splice(j, 1);
      if (this._size / this._limit < 0.25) {
        this.rehash(Math.floor(this._limit / 2));
      }
      return pair;
    }
  }

  return null;
};

HashTable.prototype.rehash = function(newSize){

  this._limit = newSize;
  this._size = 0;
  var oldStorage = this._storage;
  this._storage = makeLimitedArray(newSize);
  var self = this;

  oldStorage.each(function(tuples, index, storage) {
    if (tuples) {
      for (var i = 0; i < tuples.length; i++) {
        self.insert(tuples[i][0], tuples[i][1]);
      }
    }
  });
};
