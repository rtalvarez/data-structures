var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  instance.storage = {};
  instance.len = 0;

  _.extend(instance, queueMethods);

  return instance;
};

var queueMethods = {

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
