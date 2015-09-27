// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:



var stringifyJSON = function(obj) {

  //takes all types of input
  //returns a single string of all the values in the argument


  var result = '';
  
  //_________ work for strings ________
  if(typeof obj === "string"){
    result = result + '"' + obj + '"';
  } // _______________________________________

  //_________ work for integers and booleans ________
  if(typeof obj === "number" || typeof obj === "boolean") {
    result = result + obj;
  }  // _______________________________________

  
  if(Array.isArray(obj)) {
    //add a bracket at the beginning and end
    result += '[';
    var partial = [];
    //loop through the array
    for(var i = 0; i < obj.length; i++) {
      //call stringifyJSON on each item
      partial.push(stringifyJSON(obj[i])); 
    }
    result += partial;
    result += ']';
  }

  
  //**** deal with undefined, functions and null *****
  //if there is more than one key value pair, add comma after each pair except last pair
  if(obj === null) {
    result += null;
  }

  else if(typeof obj === "object" && !Array.isArray(obj)) {
    result += '{';
    //loop through the array
    var count = 1;

    for(key in obj) {
      //call stringifyJSON on each item
      if(obj[key] !== undefined && typeof obj[key] !== "function") {
        result += stringifyJSON(key);
        result += ':';
        result += stringifyJSON(obj[key]); 
        
        if(count < Object.keys(obj).length){
          console.log(Object.keys(obj).length);
          result += ',';
          count++
        } 
      }
    }
    result += '}';
  }
  return result;
};

console.log(stringifyJSON([43,54,[3,4],{no: "way"}]));

