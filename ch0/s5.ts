// 1. Union Type: 특정 문자열만 허용하도록 선택지 제한 (일종의 선택지 리스트)
type Gender = "male" | "female";
// 2. Interface: 객체의 '설계도' 생성. gender는 위에서 만든 Gender 타입만 가능
interface Profile {
    name: string;
    gender: Gender;
}
// 3. 변수 생성: Profile 형식을 따라야 하며, gender에 "other" 같은 값은 넣을 수 없음
let profile: Profile = {
    name: "inje",
    gender: "male", // 오타가 나거나 다른 문자열이 들어오면 에러 발생!
};

// r1
// union type:특정문자열만허용되도록선택제한
type Gender1 = "male" | "female";
// interface:객체설계도, gender는위의Gender타입만가능
interface Profile1 {
    name: string;
    gender: Gender1;
}
// 변수생성:Profile형식따르기,gender에다른값허용안됨
let profile1: Profile1 = { name: "inje", gender: "male" };

// r2
// union type:특정문자열만허용되도록선택제한
type Gender2 = "male" | "female";
// interface:객체설계도, gender는위에서만든Gender만가능
interface Profile2 {
    name: string;
    gender: Gender2;
}
// 변수생성:Profile형식따르기, gender에other같은값넣을수없음
let profile2: Profile2 = { name: "inje", gender: "male" };

// r3
// union type:특정 문자열만허용되도록선택제한
type Gender3 = "male" | "female";
// interface:객체설계도, gender는위에서만든 Gender타입만가능
interface Profile3 {
    name: string;
    gender: Gender3;
}
// 변수생성:Profile형식을따라야하며gender에other같은값넣을수없음
let profile3: Profile3 = { name: "inje", gender: "male" };

// r4
// union type:특정문자열만허용하도록선택제한
type Gender4 = "male" | "female";
// interface:객체설계도,gender는위에서만든Gender타입만가능
interface Profile4 {
    name: string;
    gender: Gender4;
}
// 변수생성:profile형식만따라야함,gender에other같은값넣을수없음
let profile4: Profile4 = { name: "inje", gender: "male" };

// r5
// union type:특정문자열만허용하도록선택제한
type Gender5 = "male" | "female";
// interface:객체설계도생성,gender는 위에서만든Gender타입만가능
interface Profile5 {
    name: string;
    gender: Gender5;
}
// 변수생성:Profile형식을따라야함,gender에other같은값넣을수없음
let profile5: Profile5 = { name: "inje", gender: "male" };
