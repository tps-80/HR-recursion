// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:



var stringifyJSON = function(obj) {

  //takes all types of input
  //returns a single string of all the values in the argument
  
  //**** deal with undefined, functions and null *****

  var result = '';
  
  //_________ work for strings ________
  if(typeof obj === "string"){
    result = result + '"' + obj + '"';
  } // _______________________________________

  //_________ work for integers and booleans ________
  if(typeof obj === "number" || typeof obj === "boolean"){
    result = result + obj;
  }  // _______________________________________


  //****** if the array is nested in an array, don't add " "
  
  if(Array.isArray(obj)) {
    //add a bracket at the beginning and end
    result += '"' + '[';
    var partial = [];
    //loop through the array
    for(var i = 0; i < obj.length; i++) {
      //call stringifyJSON on each item
      partial.push(stringifyJSON(obj[i])); 
    }
    result += partial;
    result += ']' + '"';
  }




  //****  if object is nested, don't add quotes
  //if there is more than one key value pair, add comma after each pair except last pair

  if(typeof obj === "object" && !Array.isArray(obj)) {
    result += '"' + '{';
    var partial = '';
    //loop through the array
    for(key in obj) {
      //call stringifyJSON on each item
      partial += key
      partial += ':';
      partial += stringifyJSON(obj[key]); 
    }
    result += partial;
    result += '}' + '"';
  }
  
  return result;
};

