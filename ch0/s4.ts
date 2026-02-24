/* 1. 배열 타입 지정 (Array)
작성하신 대로 대괄호([])를 사용합니다. "이 배열 안에는 어떤 타입의 데이터만 들어올 수 있다"를 명시하는 거죠.
기본 방식: 타입[]
제네릭 방식: Array<타입> (같은 의미지만 다른 표현법입니다.) */
let numbers: number[] = [1, 2, 3];
let strings: Array<string> = ["Apple", "Banana"]; // 위와 동일한 효과

/* 2. 객체 타입 지정 (Object)
객체는 내부에 어떤 속성(Property)이 있고, 그 속성의 값이 무엇인지 구조(Shape)를 직접 묘사하는 것이 기본입니다.
직접 작성: 변수 선언 시 바로 작성.
Interface/Type 활용: 객체 구조가 복잡해지면 따로 이름을 붙여서 재사용합니다 */
// 1. 직접 작성 (작성하신 방식)
let profile: { name: string; gender: string } = { name: "Inje Lee", gender: "male" };
// 2. Interface 사용 (더 깔끔하고 권장되는 방식)
interface User {
    name: string;
    gender: string;
    age?: number; // '?'를 붙이면 선택적 속성이 됩니다 (없어도 됨)
}
let profile1: User = { name: "Inje Lee", gender: "male" };

// r1
// 1.배열타입지정:대괄호/재네릭
let numbers1: number[] = [1, 2, 3];
let numbers2: Array<number> = [1, 2, 3];
// 2.객체타입지정:직접/인터페이스활용
let profile2: { name: string; gender: string } = { name: "Inje Lee", gender: "male" };
interface User1 {
    name: string;
    gender: string;
}
let profile3: User1 = { name: "Inje Lee", gender: "male" };

// r2
// 배열타입지정:대괄호
let numbers3: number[] = [1, 2, 3];
// 배열타입지정:제네릭사용
let numbers4: Array<number> = [1, 2, 3];
// 객체타입지정:직접입력
let profile4: { name: string; gender: string } = { name: "inje", gender: "male" };
// 객체타입지정:interface사용
interface User2 {
    name: string;
    gender: string;
}
let profile5: User2 = { name: "inje", gender: "male" };

// r3
// 배열타입지정:대괄호
let numbers5: number[] = [1, 2, 3];
// 배열타입지정:제네릭사용
let numbers6: Array<number> = [1, 2, 3];
// 객체타입지정:직접입력
let profile6: { name: string; gender: string } = { name: "inje", gender: "male" };
// 객체타입지정:interface사용
interface User3 {
    name: string;
    gender: string;
}
let profile7: User3 = { name: "inje", gender: "male" };

// r4
// 배열타입지정:대괄호
let numbers7: number[] = [1, 2, 3];
// 배열타입지정:제네릭사용
let numbers8: Array<number> = [1, 2, 3];
// 객체타입지정:직접입력
let profile8: { name: string; gender: string } = { name: "inje", gender: "male" };
// 객체타입지정:interface사용
interface User4 {
    name: string;
    gender: string;
}
let profile9: User4 = { name: "inje", gender: "male" };

// r5
// 배열타입지정:대괄호
let numbers9: number[] = [1, 2, 3];
// 배열타입지정:제네릭사용
let numbers10: Array<number> = [1, 2, 3];
// 객체타입지정:직접입력
let profile10: { name: string; gender: string } = { name: "inje", gender: "male" };
// 객체타입지정:interface사용
interface User5 {
    name: string;
    gender: string;
}
let profile11: User5 = { name: "inje", gender: "male" };
