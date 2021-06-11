/*9. bifurcate

This snippet splits values into two groups and then puts a truthy element of filter in the first group, and in the second group otherwise.

You can use Array.prototype.reduce() and Array.prototype.push() to add elements to groups based on filter.*/

const bifurcate = (arr, filter) =>
  arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);
  
//bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]); 
// [ ['beep', 'boop', 'bar'], ['foo'] ]
