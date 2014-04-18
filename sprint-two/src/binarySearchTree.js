
var makeBinarySearchTree = function(value){
  var instance = Object.create(makeBinarySearchTree.methods);
  instance.value = value;
  return instance;
};

makeBinarySearchTree.methods = {
  insert: function(value) {
    //todo: let's get an instructor to review this quickly for "best practices"
    var direction = value > this.value ? 'right' : 'left';

    if (this[direction]){
      this[direction].insert(value);
    } else {
      this[direction] = makeBinarySearchTree(value);
    }
  },

  contains: function(value) {
    // if current node val === value, return
    //   else if there's a right, recurse on that node
    //   else if there's a left, resurse on that node
    //   else return false
    var found = false;
    if (value === this.value){
      return true;
    }
    if (this.right){
      found = found || this.right.contains(value);
    }
    if (!found && this.left){
      found = found || this.left.contains(value);
    }

    return found;
  },
  depthFirstLog: function(func) {
    func(this.value);
    if (this.right) {
      this.right.depthFirstLog(func);
    }
    if (this.left) {
      this.left.depthFirstLog(func);
    }
  }
};
