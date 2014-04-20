var makeStack = function() {
  var instance = Object.create(stackMethods);
  return instance;
};


var stackMethods = {
  len: 0,

  storage: {},

  push: function(value){
    this.storage[this.len] = value;
    this.len++;
  },

  pop: function(){
    this.len && this.len--;
    var result = this.storage[this.len];
    delete this.storage[this.len];
    return result;
  },

  size: function(){
    return this.len;
  }

};
