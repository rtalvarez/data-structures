var makeStack = function() {
  var instance = {};
  instance.len = 0;
  instance.storage = {};

  _.extend(instance, stackMethods);

  console.log(instance);
  return instance;
};


var stackMethods = {

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
