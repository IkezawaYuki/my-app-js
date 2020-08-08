'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);
function fb(n){
  if(memo.has(n)){
    return memo.get(n)
  }
  var num = fb(n - 1) + fb(n - 2);
  memo.set(n, num)
  return num
}

const num = 40;
for (let i = 0; i <= num; i++){
  console.log(fb(i))
}