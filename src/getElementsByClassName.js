// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var results = [];
var getElementsByClassName = function(className, node){
  //create results array
  
  var node = node || document.body;

  if(node.className === className) {
    results.push(node);
  }

  // console.log(node.childNodes);
  if(node.hasChildNoes) {
     for(var i = 0; i < node.childNodes.length; i++) {
      getElementsByClassName(className, node.childNodes[i]);
  }

  }
  
  //loop through all nodes of document.body
  //if node class === classname 
    //add node to a result array
  //find all the childnodes of current node
    //invoke getElements again on each child node
  //if there are no more nodes, move on to next parent node

   //return results array
   return results;
};
