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
  var isThere = this._storage.get(i);
  //[isThere,[key,value]]
  this._storage.set(i, [isThere, [key, value]]);
};

HashTable.prototype.retrieve = function(key){
  var i = getIndexBelowMaxForKey(key, this._limit);
  return this._storage.get(i) ? this._storage.get(i)[1] : null;
};

HashTable.prototype.remove = function(key){
  this._storage.each(function(bucket, index, storage) {
    if(bucket && bucket[0] === key) {
      delete storage[index];
    }
  });

};

// var hashTable = new HashTable();

// hashTable.insert("ramin", "taleghani");

var a =  [[['cat', 'unfrie'], ['lkjdf', 'aslk']],
          undefined,
          undefined,
          undefined,
          ['bob', 'cpladf']];

var b =  [[['cat', 'unfrie'], ['lkjdf', 'aslk']],
          undefined,
          undefined,
          undefined,
          [['bob', 'cpladf']]];
