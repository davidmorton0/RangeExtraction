function solution(list){
  let str = "";
  for (let i = 0;i < list.length;i++) {
    if(list[i] + 1 == list[i + 1] && list[i] + 2 == list[i + 2]) {
      str += `${list[i]}-`;
      i += 2;
      while (list[i] + 1 == list[i + 1]) { i++; }
    }
    str += `${list[i]},`;
  }
  return str.slice(0, -1);
}

var assert = require('assert');
assert.equal(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14,
                      15, 17, 18, 19, 20]), "-6,-3-1,3-5,7-11,14,15,17-20")
