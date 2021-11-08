/**
 * Direction:
 * Remove duplicated data from array
 * 
 * Expected Result:
 * [1, 2, 3, 4, 5]
 */
const data = [1, 4, 2, 3, 5, 3, 2, 4];
data.sort();
function result(data) {
  //data.Sort();
  return[...new Set(data)]
}

console.log(result(data));
