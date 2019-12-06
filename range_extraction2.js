function solution(list){
  return list.reduce((str, num, i) => str += addToList(i, list), "")
    .slice(0, -1);
}

function addToList(i, list) {
  if (list[i - 1] == list[i] - 1) {
    //middle of range or end of list
    if (list[i + 1] == list[i] + 1) {
      //middle of range
      return "";
    } else {
      //end of range
      return `${list[i]},`;
    }
    //start of new range or ind number
  } else if (list[i + 2] == list[i] + 2) {
    //start of range
    return `${list[i]}-`;
  } else {
    //indv number
    return `${list[i]},`;
  }
}

var assert = require('assert');
assert.equal(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14,
                      15, 17, 18, 19, 20]), "-6,-3-1,3-5,7-11,14,15,17-20")
