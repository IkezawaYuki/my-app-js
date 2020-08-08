'use strict';
function fb(n){
  if(n === 0){
    return 0;
  } else if (n === 1){
    return 1;
  }
  return fb(n - 2) + fb(n - 1);
}

const num = 40;
for (let i = 0; i <= num; i++){
  console.log(fb(i))
}