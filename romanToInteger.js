var romanToInt = function(s) {
  var dict = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  };
  var currTotal = dict[s[0]]; //1000
  var prev = dict[s[0]];  //1000
  for (var i = 1; i < s.length; i++) {
    if (dict[s[i]] > prev) {
      currTotal -= prev;
      currTotal += (dict[s[i]] - prev);
      prev = dict[s[i]];
    } else {
      currTotal += dict[s[i]];
      prev = dict[s[i]];
    }
  }
  return currTotal;
};

console.log('workinh');