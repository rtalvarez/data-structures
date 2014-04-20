var Stack = function(){
  this.len = 0;
  this.storage = {};
};

// TODO: ask instructor
// Stack.prototype.len = 0;
// Stack.prototype.storage = {};
Stack.prototype.push = function(value){
    this.storage[this.len] = value;
    this.len++;
  };
Stack.prototype.pop = function(){
    this.len && this.len--;
    var result = this.storage[this.len];
    delete this.storage[this.len];
    return result;
  };
Stack.prototype.size = function(){
    return this.len;
  };

var myStack = new Stack();

myStack.push('myval');
