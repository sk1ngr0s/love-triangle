/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation 
  var pairs=0;
  for(var i=0; i<preferences.length; i++){
    var x=i+1;
    var y=preferences[i];
    var z=preferences[y-1];
    if(preferences[z-1]===x){
      pairs++
    }
  }
  return Math.floor(pairs/3);
};
