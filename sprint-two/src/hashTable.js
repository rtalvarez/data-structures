var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value){
  var i = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(i);
  if (bucket) {
    var keyFound = false;
    for (var j = 0; j < bucket.length; j++){
      if (bucket[j][0] === key){
        bucket[j][1] = value;
        keyFound = true;
        break;
      }
    }
    keyFound || bucket.push([key, value]);
  } else {
    this._storage.set(i, [[key, value]]);
  }
};

HashTable.prototype.retrieve = function(key){
  var i = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(i);
  if (bucket){
    for (var j = 0; j < bucket.length; j++){
      if (bucket[j][0] === key){
        return bucket[j][1];
      }
    }
  }
  return null;
};

HashTable.prototype.remove = function(key){
  var i = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(i);
  if (bucket) {
    for (var j = 0; j < bucket.length; j++) {
      if (bucket[j][0] === key) {
        return bucket.splice(j, 1);
      }
    }
  }
  return null;
};
