// 1. React 라이브러리를 불러옵니다. 
// (Next.js 13 이상 App Router 방식에서는 생략 가능하지만, 관습적으로 포함하기도 합니다.)
import React from "react";

// 2. page라는 이름의 함수형 컴포넌트를 정의합니다.
// Next.js에서 파일명이 page.js(또는 .tsx)라면 이 함수가 해당 경로의 실제 화면이 됩니다.
function Page() {
    // 3. JSX(JavaScript XML)를 반환합니다. 
    // 브라우저에는 <h1> 태그로 변환되어 "Hello, Next.js!"가 출력됩니다.
    return <h1>Hello, Next.js!</h1>;
}
// 4. 이 컴포넌트를 기본값(default)으로 내보냅니다.
// Next.js 프레임워크가 이 파일을 읽어 화면에 렌더링할 수 있게 해줍니다.
export default Page;

// // r1
// // 리액트라이브러리불러오기
// import React from "react";
// // 함수형컴포넌트정의
// function Page(){
//     // JSX반환
//     return <h1>Hello, Next.js!</h1>
// }
// // 컴포넌트내보내기, next.js가파일읽어서화면렌더링
// export default Page;

// // r2
// // 리액트라이브러리불러오기
// import React from "react";
// // 함수형컴포넌트정의
// function Page(){
//     // JSX반환
//     return <h1>Hello, Next.js!</h1>
// }
// // 컴포넌트내보내기,next.js가화면에렌더링
// export default Page;

// // r3
// // 리액트라이브러리불러오기
// import React from "react";
// // 함수형컴포넌트정의
// function Page(){
//     // JSX반환
//     return <h1>Hello, Next.js!</h1>
// }
// // 컴포넌트내보내기, next.js가파일을읽어화면내보냄
// export default Page;

// // r4
// // 리액트라이브러리불러오기
// import React from "react";
// // 함수형컴포넌트정의
// function Page(){
//     // JSX반환
//     return <h1>Hello, Next.js!</h1>
// }
// // 컴포넌트내보내기,next.js가파일을읽어화면렌더링
// export default Page;

// // r5
// // 리액트라이브러리불러오기
// import React from "react";
// // 함수형컴포넌트정의
// function Page(){
//     // JSX반환
//     return <h1>Hello, Next.js!</h1>
// }
// // 컴포넌트내보내기,next.js가파일읽어화면렌더링
// export default Page;