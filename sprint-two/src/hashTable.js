var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value){
  var i = getIndexBelowMaxForKey(key, this._limit);
  // if value at storage[i] is truthy
  //   then push new [key, value] to storage[i]
  // otherwise
  //   add [[key, value]] at storage[i]
  var bucket = this._storage.get(i);
  if (bucket) {
    var keyFound = false;
    // TODO: still need to check if there is a dup
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

// var hashTable = new HashTable();

// hashTable.insert("ramin", "taleghani");

var a =  [[['cat', 'unfrie'], ['lkjdf', 'aslk']],
          undefined,
          undefined,
          undefined,
          [['bob', 'cpladf']]];

var b =  [[['cat', 'unfrie'], ['lkjdf', 'aslk']],
          undefined,
          undefined,
          undefined,
          [['bob', 'cpladf']]];
