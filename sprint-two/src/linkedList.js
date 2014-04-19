var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){

    var newNode = makeNode(value);

    if (!list.head) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }

  };

  list.removeHead = function(){
    var oldHead = list.head;
    list.head = list.head.next;
    return oldHead;
  };

  list.contains = function(target, node){
    // node = node || list.head;
    // while(node.next !== null){
    //   if (node.value === target){
    //     return true;
    //   } else {
    //     node = node.next;
    //   }
    // }

    // return node.value === target;
    //
    node = node || list.head;
    if (node.value === target){
      return true;
    } else if (node.next) {
      return this.contains(target, node.next);
    }

    return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
