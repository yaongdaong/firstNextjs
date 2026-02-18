// 1. 동적 타이핑 (Dynamic Typing):
// 자바스크립트는 변수를 선언할 때 타입을 미리 정하지 않습니다.
// 코드가 실행되는 시점(Runtime)에 할당된 값에 따라 타입이 결정됩니다.
var a = 10;
console.log(typeof a); // "number"
a = "Hello";
console.log(typeof a); // "string" (숫자에서 문자열로 타입이 바뀜)
a = false;
console.log(typeof a); // "boolean" (문자열에서 불리언으로 타입이 바뀜)

// 2. 위험성 (The "Why" it's risky):
// 개발자의 실수로 의도치 않은 타입이 들어와도 에러 없이 실행될 수 있습니다.
// 예: 숫자 계산을 기대했는데 문자열이 들어와 '10' + 5 = '105'가 되는 등의 버그 발생 가능.

// r1
// 동적타이핑:자바스크립트는 코드실행시 타입이결정됨
var a1 = 10;
console.log(typeof a1); // number
a1 = "hello";
console.log(typeof a1); // string으로 변경
a1 = false;
console.log(typeof a1); // boolean으로 변경
// 개발자실수로의도치않은타입이들어와서에러발생가능

// r2
// 동적타이핑:자바스크립트는 코드실행시 타입결정됨
var a2 = 10;
console.log(typeof a2); //number
a2 = "hello";
console.log(typeof a2); // string
a2 = false;
console.log(typeof a2); //boolean
// 개발자실수로의도치않은타입들어와서에러발생가능

// r3
// 동적타이핑:자바스크립트는 코드실행시 타입결정됨
var a3 = 10;
console.log(typeof a3); //number
a3 = "hello";
console.log(typeof a3); //string
a3 = false;
console.log(typeof a3); //boolean
// 개발자실수로의도치않은타입들어와서에러발생가능

// r4
// 동적타이핑:자바스크립트는코드실행시타입결정됨
var a4 = 10;
console.log(typeof a4); //number
a4 = "hello";
console.log(typeof a4); //string
a4 = false;
console.log(typeof a4); //boolean
// 개발자실수로의도치않은타입들어와서에러발생가능

// r5
// 동적타이핑:자바스크립트는코드실행시타입결정됨
var a5 = 10;
console.log(typeof a5); //number
a5 = "hello";
console.log(typeof a5); //string
a5 = false;
console.log(typeof a5); //boolean
// 개발자실수로의도치않은타입들어와서에러발생가능
