// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node){
  //use document.body
  //use element.childNodes
  //use element.classList
 
  //create results array
  var results = [];
  node = node || document.body;

  for (var i = 0; i < node.classList.length; i++) {
    if(node.classList[i] === className) {
      results.push(node);
    }
  };
    
  var children = [];
    
  for (var i = 0; i < node.childNodes.length; i++) {
  
     if (node.childNodes[i].nodeType === Node.ELEMENT_NODE) {
      children.push(node.childNodes[i]);
     }  
  }

  for (var i = 0; i < children.length; i++) {
    var results = results.concat(getElementsByClassName(className, children[i]));
  }
  
  //loop through all nodes of document.body
  //if node class === classname 
    //add node to a result array
  //find all the childnodes of current node
    //invoke getElements again on each child node
      //if child node is text element, don't invoke getElements

   //return results array
   return results;
};
