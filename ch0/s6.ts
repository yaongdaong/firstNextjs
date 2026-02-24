// <T>: 타입을 파라미터로 받음 (함수 호출 시 결정됨)
// array: T[]: 'T' 타입의 요소들로 이루어진 배열을 입력받음
// : T[]: 'T' 타입의 요소들로 이루어진 배열을 반환함
function reverse<T>(array: T[]): T[] {
    // 입력받은 배열의 순서를 뒤집어서 반환
    return array.reverse();
}
// 활용 예시
const numArr = reverse<number>([1, 2, 3]); // T가 number가 됨 -> 결과: [3, 2, 1]
const strArr = reverse<string>(["a", "b"]); // T가 string이 됨 -> 결과: ["b", "a"]

// r1
// T:타입지정, 첫번째-선언,두번째-입력,세번째-반환
function reverse1<T>(array: T[]): T[] {
    // 입력받은 배열순서 뒤집어 반환
    return array.reverse();
}

// r2
// T:타입지정, 첫번째-선언, 두번째-입력, 세번째-반환
function reverse2<T>(array: T[]): T[] {
    // 입력받은 배열순서 뒤집어 반환
    return array.reverse();
}

// r3
// T:타입지정, 첫번째-선언, 두번째-입력, 세번째-반환
function reverse3<T>(array: T[]): T[] {
    // 입력받은 배열순서 뒤집어 반환
    return array.reverse();
}

// r4
// T:타입지정,첫번째-선언,두번쨰-입력,세번째-반환
function reverse4<T>(array: T[]): T[] {
    // 입력받은배열순서뒤집어반환
    return array.reverse();
}

// r5
// T:타입지정,첫번째-선언,두번째-입력,세번째-반환
function reverse5<T>(array: T[]): T[] {
    // 입력받은배열순서뒤집어반환
    return array.reverse();
}
