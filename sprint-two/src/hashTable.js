var HashTable = function(size){
  this._limit = size || 8;
  this._storage = makeLimitedArray(this._limit);
  this._items = 0;
};

HashTable.prototype.insert = function(key, value, doRehash){
  // add latest hash
    // current code
  // loop through elements of storage to get num of current buckets
  // also store elements
    // if curr buck / _.limit > 75%
      // rehash table
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

  keyFound || this._items++;

  if (doRehash === undefined || doRehash === true) {
    this.rehash();
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
  var result;
  var bucket = this._storage.get(i);
  if (bucket) {
    for (var j = 0; j < bucket.length; j++) {
      if (bucket[j][0] === key) {
        this._items--;
        result = bucket.splice(j, 1);
        this.rehash();
        return result;
      }
    }
  }
  return null;
};

HashTable.prototype.rehash = function(){
  var pairs = [];
  this._storage.each(function(bucket, index, storage) {
    if (bucket) {
      for (var i = 0; i < bucket.length; i++) {
        pairs.push(bucket[i]);
      }
    }
  });
  // var reHashrequired = this._items / this._limit > 0.75 ? true : this._items / this._limit < 0.25 ? true : false;

  // if (reHashrequired){

  // }

  // var rehashReq = false;
  if (this._items / this._limit > 0.75) {
    this._limit *= 2;
    // rehashReq = true;
    this._storage = makeLimitedArray(this._limit);
    this._items = 0;
    for (var i = 0; i < pairs.length; i++){
      this.insert(pairs[i][0], pairs[i][1], false);
    }
  } else if (this._items / this._limit < 0.25) {
    this._limit = Math.max(Math.floor(0.5 * this._limit), 1);
    this._storage = makeLimitedArray(this._limit);
    this._items = 0;
    for (var i = 0; i < pairs.length; i++){
      this.insert(pairs[i][0], pairs[i][1], false);
    }
  }

};
