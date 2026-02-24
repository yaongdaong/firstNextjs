// 1. React 라이브러리를 불러옵니다.
// (최신 Next.js 버전에서는 생략 가능하지만, React.ReactNode 타입을 쓰기 위해 명시했습니다.)
import React from "react";
/**
 * 2. RootLayout 컴포넌트 정의
 * Next.js 13 버전 이상의 App Router 방식에서 필수적인 파일입니다.
 * 모든 페이지 컴포넌트들은 이 레이아웃의 {children} 자리에 들어가게 됩니다.
 */
// children-첫번째:매개변수,두번쨰:타입정의,세번쨰:화면출력
export default function RootLayout({
    children, // 3. 매개변수로 'children'을 구조 분해 할당으로 받습니다.
}: {
    // 4. TypeScript 타입 정의: children은 리액트의 노드(태그, 문자열, 컴포넌트 등) 타입임을 명시합니다.
    // React.ReactNode**는 "이 자리에는 글자, 숫자, 태그, 그림 등 리액트가 화면에 그릴 수 있는 어떤 재료든 올 수 있어!"라고 컴퓨터에게 미리 허락을 구하는 약속이에요.
    children: React.ReactNode;
}) {
    return (
        // 5. 전체 웹사이트의 언어 설정을 영어("en")로 지정합니다.
        <html lang="en">
            {/* 6. 실제 브라우저에 표시될 본문(Body) 영역입니다. */}
            {/* 여기에 폰트 설정이나 공통 네비게이션(Nav), 푸터(Footer)를 넣기도 합니다. */}
            <body>{children}</body>
        </html>
    );
}

// // r1
// // 리액트 라이브러리 불러오기
// import React from "react";
// // RootLayout컴포넌트정의
// // 모든페이지컴포넌트는{children}자리에들어감
// // children-첫번째:매개변수,두번쨰:타입정의,세번쨰:화면출력
// export default function RootLayout({ children }: { children: React.ReactNode }) {
//     return (
//         // 전체웹사이트언어는영어
//         <html lang="en">
//             {/*  실제브라우저에표시될본문 */}
//             <body>{children}</body>
//         </html>
//     );
// }

// // r2
// // 리액트라이브러리불러오기
// import React from "React";
// // 컴포넌트정의
// // children 첫번쨰:매개변수,두번쨰:타입정의,세번째:화면출력
// export default function RootLayout({ children }: { children: React.ReactNode }) {
//     return (
//         // 전체웹사이트언어는영어
//         <html lang="en">
//             {/*  실제브라우저에표시될본문 */}
//             <body>{children}</body>
//         </html>
//     );
// }

// // r3
// // 리액트라이브러리불러오기
// import React from "react";
// // RootLayout컴포넌트정의
// // 모든페에지컴포넌트는{children}자리에들어감
// // children-첫번째:매개변수,두번째:타입정의,세번쨰:화면출력
// // reactnode:children자리에리액트재료가와야함
// export default function RootLayout({ children }: { children: React.ReactNode }) {
//     return (
//         // 전체웹언어영어
//         <html lang="en">
//             {/* 실제브라우저영역 */}
//             <body>{children}</body>
//         </html>
//     );
// }

// // r4
// // 리액트라이브러리불러오기
// import React from "react";
// // 컴포넌트정의
// // children:첫번째-매개변수,두번째-타입정의,세번째-화면출력
// export default function RootLayout({ children }: { children: React.ReactNode }) {
//     return (
//         // 전체웹사이트어어는영어
//         <html lang="en">
//             {/* 실제브라우저표시본문 */}
//             <body>{children}</body>
//         </html>
//     );
// }

// // r5
// // 리액트라이브러리불러오기
// import React from "react";
// // 컴포넌트정의
// // children:첫번째-매개변수,두번째-타입정의,세번째-화면출력
// export default function RootLayout({ children }: { children: React.ReactNode }) {
//     return (
//         // 전체웹사이트언어는영어
//         <html lang="en">
//             {/* 실제브라우저에표시될본문 */}
//             <body>{children}</body>
//         </html>
//     );
// }
