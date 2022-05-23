// 1. Use strict
// ES5에서 추가됨
// Valina JS에서 쓰임
'use strict';

// 2. Variable
// let (added in ES6)
let globalname = 'global name';
{
  let name = 'ksm';
  console.log(name);
  name = 'hello';
  console.log(name);
}
console.log(globalname);

// var 은 이제 쓰지말자!
// var hoisting(어디에 선언되있냐에 상관없이 선언을 제일 위로 끌어올려주는것)
{
  age = 4;
  var age;
  console.log(age);
}
console.log("age : ", age);// 블록 스코프가 통하지 않는다.

/* 
let 은 var 처럼 되지 않는다.
{
  age2 = 4;
  let age2;
}
 */

// 3. Contants
// 변경이 불가능한 데이터타입
// - 보안
// - thread 가 안전함
// - 실수 방지
const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive, single item : number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

const count = 17;// integer
const size = 17.1; // decimal number
console.log(`count: ${count}, type: ${typeof count}`);
console.log(`size: ${size}, type: ${typeof size}`);

// number 데이터 타입중에서 특별한것 - infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);


// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`greeting: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`;// template literals (string)
console.log(`helloBob: ${helloBob}, type: ${typeof helloBob}`);


// boolean
// false: 0, null, undefined, NaN, ''
// true, any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`canRead: ${canRead}, type: ${typeof canRead}`);
console.log(`test: ${test}, type: ${typeof test}`);



