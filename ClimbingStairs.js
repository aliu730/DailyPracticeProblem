var climbStairs = function(n) {
  if (n === 1) {
    return 1;
  }
  let total = 0;
  let counter = 0;
  let dict = [];
  dict[0] = 1;
  dict[1] = 2;
  let x = 0;
  for (var i = 2; i < n; i++) {
    dict[i] = dict[i-1] + dict[i-2];
  }
  return dict[dict.length-1];
};

climbStairs(44);