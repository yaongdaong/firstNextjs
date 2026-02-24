/* 함수의 매개변수 및 반환값 타입 지정
 특징: 입력값과 출력값의 규격을 제한하여 함수의 안정성을 높임.*/
// 매개변수 name(string)을 받아 인사말(string)을 반환하는 함수
function greeting(name: string): string {
    return `Hello, ${name}!`;
}
// 두 숫자(number)를 받아 합계(number)를 반환하는 함수
function sum(num1: number, num2: number): number {
    return num1 + num2;
}
// 문자열(string)을 받아 그 길이(number)를 반환하는 함수
function getStrLength(str: string): number {
    return str.length;
}

// r1
// 함수의매개변수및반환값타입지정:입력값,출력값제한해서함수안정성높임
// 매개변수name(string)입력받아인사말(string)반환
function greeting1(name: string): string {
    return `Hello,${name}!`;
}
// 숫자(number)받아합계(number)반환
function sum1(num1: number, num2: number): number {
    return num1 + num2;
}
// 문자열(string)받아값(number)반환
function getStrLength1(str: string): number {
    return str.length;
}

// r2
// 함수의매개변수와반환값의타입지정
function greeting2(name: string): string {
    return `Hello,${name}!`;
}
function sum2(num1: number, num2: number) {
    return num1 + num2;
}
function getStrLength2(str: string): number {
    return str.length;
}

// r3
// 함수매개변수와반환값타입지정
function greeting3(name: string): string {
    return `Hello,${name}!`;
}
function sum3(num1: number, num2: number): number {
    return num1 + num2;
}
function getStrLength3(str: string): number {
    return str.length;
}

// r4
// 함수매개변수와반환값타입지정
function greeting4(name: string): string {
    return `Hello,${name}`;
}
function sum4(num1: number, num2: number): number {
    return num1 + num2;
}
function getStrLength4(str: string): number {
    return str.length;
}

// r5
// 함수매개변수와반환값타입지정
function greeting5(name: string): string {
    return `Hello,${name}`;
}
function sum5(num1: number, num2: number): number {
    return num1 + num2;
}
function getStrLegnth5(str: string): number {
    return str.length;
}
