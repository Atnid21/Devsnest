// answer 1 
function is_array(arr) {
  return Array.isArray(arr);
}

// answer 2 


function array_clone(arr) {
  var c = arr.map((x) => x);
  return c;
}


// answer 3 
function first(a, n = 1) {
  if (n >= 0) {
      return a.slice(0, n);
  }
  return [];
}

// answer 4
function join_Array(arr) {
  return arr.join('+');
}
