var maxArea = function(height) {
  var currHigh = 0;
  for (var i = 0 ; i < height.length; i++ ) {
    for (var j = i + 1; j < height.length; j++) {
      if (height[i] < height[j]) {
        if (height[i] * (j-i) > currHigh) {
          currHigh = height[i] * (j-i);
        }
      } else {
        if (height[j] * (j-i) > currHigh) {
          currHigh = height[j] * (j-i);
        }
      }
    }
  }
  return currHigh;
};