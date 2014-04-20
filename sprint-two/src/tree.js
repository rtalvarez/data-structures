var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  extend(newTree, treeMethods);

  return newTree;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(makeTree(value));
};

treeMethods.contains = function(target){
  var isFound = false;
  if (this.value === target) {
    return true;
  } else if (this.children) {
    for (var i = 0; i < this.children.length; i++) {
      isFound = isFound || this.children[i].contains(target);
    }
    return isFound;
  } else {
    return false;
  }
};
