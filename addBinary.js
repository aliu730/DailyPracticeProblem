var addBinary = function(a, b) {
  let a = a.split("");
  let b = b.split("");
  let ans = [];
  let carryOver = 0;
  if (a.length >= b.length) {
    for (let i = a.length; i > 0; i--) {
      if (b[i] !== undefined) {
        if (carryOver + a[i] + b[i] === 2) {
          ans.unshift(0);
          carryOver = 1;
        } else if (carryOver + a[i] + b[i] === 1) {
          ans.unshift(1);
          carryOver = 0;
        } else if (carryOver + a[i] + b[i] === 3 ) {
          ans.unshift(1);
          carryOver = 1;
        } else {
          ans.unshift(0);
        }
      } else {
        if (carryOver + a[i] + 0 === 2) {
          ans.unshift(0);
          carryOver = 1;
        } else if (carryOver + a[i] + 0 === 1) {
          ans.unshift(1);
          carryOver = 0;
        } else if (carryOver + a[i] + 0 === 3 ) {
          ans.unshift(1);
          carryOver = 1;
        } else {
          ans.unshift(0);
        }
      }
    }
  } else {
    for (let i = 0; i < b.length; b++) {
      
    }
  }
  return ans;
};
addBinary("11111", "111")