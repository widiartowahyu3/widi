/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function result(numbers) {
  var missing = -1;
  for(i = 0; i <= numbers.length; i++){
      if(numbers.indexOf(i) === -1){
          missing = i;
      }
  }
  return missing
}

console.log(result(numbers));
