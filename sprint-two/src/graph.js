var Graph = function(){
};

Graph.prototype.addNode = function(newNode, toNode){
  var numNodes = Object.keys(this).length;
  this[newNode] = [];
  if (numNodes === 1 ) {
    this.addEdge(newNode, Object.keys(this)[0]);
  } else if (numNodes !== 0) {
    this.addEdge(newNode, toNode);
  }
};

Graph.prototype.contains = function(node){
  return !!this[node];
};

Graph.prototype.removeNode = function(node){
  if (this.contains(node)) {
    var connections = this[node];
    var iterations = connections.length;
    for (var i = 0; i < iterations; i++) {
      var removeNode = connections[i];
      this[removeNode].splice(this[removeNode].indexOf(node), 1);
      if (this[removeNode].length === 0) {
        delete this[removeNode];
      }
    }
    delete this[node];
  }

};

Graph.prototype.getEdge = function(fromNode, toNode){
  return this[fromNode].indexOf(toNode) !== -1;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this[fromNode].push(toNode);
  this[toNode].push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  this[fromNode].splice(this[fromNode].indexOf(toNode), 1);
  this[toNode].splice(this[toNode].indexOf(fromNode), 1);
  if (this[fromNode].length === 0) {
    delete this[fromNode];
  }
  if (this[toNode].length === 0){
    delete this[toNode];
  }
};


// myGraph = new Graph();

// myGraph.addNode('apple');
