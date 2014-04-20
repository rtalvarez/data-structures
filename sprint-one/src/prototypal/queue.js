var makeQueue = function(){
  var instance = Object.create(queueMethods);
  return instance;
};

var queueMethods = {

  len: 0,

  storage: {},

  size: function(){
    return this.len;
  },

  enqueue: function(value){
    this.storage[this.len] = value;
    this.len++;
  },

  dequeue: function(){
    var result = this.storage[0];
    delete this.storage[0];
    for (var i = 1; i < this.len; i++){
      this.storage[i - 1] = this.storage[i];
    }
    this.len && this.len--;
    delete this.storage[this.len];
    return result;
  }
};

