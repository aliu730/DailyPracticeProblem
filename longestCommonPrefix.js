var longestCommonPrefix = function(strs) {
  if (strs.length === 0) {
    return "";
  } else if (strs[0].length === 0) {
    return "";
  }
  var weStillGood = true;
  var currHead = "";
  var currIdx = 0;
  var currLetter = strs[0][0];
  // turn false when we find a mismatch.
  while (weStillGood) {
    for (var i = 0; i < strs.length; i++) {
      if (strs[i][currIdx] === currLetter && weStillGood) {
        if (i === strs.length -1) {
          currHead += strs[i][currIdx];
          currIdx += 1;
          if (strs[0][currIdx] === undefined) {
            return currHead;
          }
          currLetter = strs[0][currIdx];
        }
      } else {
        weStillGood = false;
        return currHead;
      }
    }
  }
};