// JS 는 프랑켄슈타인마냥 얹어둔 방식, 업데이트 X
// 크로미움기반 console 창에서 확인가능 (like print() in Python)
// 항상 const, 가끔 let, 네버 var
// boolean : true, false > Python 에선 True, False
// null (variable 안에 아무것도 없다) > Python 에선 none
// undefined 과는 명확히 다름
// Array ex.
// const days = [1,2,false, null, undefined, "text", me]
// Array append
// days.push = "mon"
// Camel index = 띄어쓰기없이 첫 단어를 대문자로 (inMyPoket)

const calc = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  times: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  power: function (a, b) {
    return a ** b;
  },
};

const plusResult = calc.plus(3, 2);
const minusResult = calc.plus(plusResult, 2);
const timesResult = calc.plus(minusResult, 2);
const divideResult = calc.plus(timesResult, 2);
const powerofResult = calc.plus(divideResult, 2);

console.log(calc.divide(3, 2));
