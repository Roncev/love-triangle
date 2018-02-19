/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var zarr = [,];
  preferences = zarr.concat(preferences);
  var count = 0;
  for(var i = 1; i <= preferences.length; i++) {
  var first = preferences[i];//2
  var second = preferences[first];//3
  var third = preferences[second];//1
     if (
          (third == i) &&
          (preferences[first] != first &&
           preferences[second] != second &&
           preferences[third] != third) )
     {
       count++
       //console.log(first, "first", second, "second", third, "third");
     }
  }
console.log(count, "count", preferences.length);
return count/3;
};
