var wordBreak = function(s, wordDict) {
  let proven = [true];
  proven[s.length] = false;
  for (let i = 0; i < s.length; i++) {
    if (proven[i]) {
      for (let j = 0; j < wordDict.length; j++) {
        if (wordDict[j] === s.substring(i, wordDict[j].length + i)) {
          proven[i + wordDict[j].length] = true;
        }     
      }
    }
  }
  return proven[s.length];
};

console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]));