var Queue = function() {
  // Hey! Copy your code from src/prototypal/queuejs and paste it here
  this.len = 0;
  this.storage = {};
};


Queue.prototype.size = function(){
  return this.len;
};

Queue.prototype.enqueue = function(value){
  this.storage[this.len] = value;
  this.len++;
};

Queue.prototype.dequeue = function(){
  var result = this.storage[0];
  delete this.storage[0];
  for (var i = 1; i < this.len; i++){
    this.storage[i - 1] = this.storage[i];
  }
  this.len && this.len--;
  delete this.storage[this.len];
  return result;
};

