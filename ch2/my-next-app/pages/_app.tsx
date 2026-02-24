// Next.js는 '택배 회사'예요
// AppProps는 '마법의 택배 상자'예요
// **AppProps**는 Next.js가 우리에게 페이지를 그려달라고 보내주는 **"재료 세트 상자"**라고 생각하면 돼요!
// next/app에서 AppProps 타입을 불러옵니다. (TypeScript 사용 시 필수)
import type { AppProps } from "next/app";
/**
 * MyApp 컴포넌트: Next.js가 서버에 요청을 보낼 때 가장 먼저 확인하는 '최상위 공통 페이지'입니다.
 * @param props - Component와 pageProps를 포함하는 객체
 */
function MyApp(props: AppProps) {
    // Component: 현재 브라우저가 렌더링해야 할 실제 페이지 컴포넌트 (예: index.tsx, about.tsx 등)
    // pageProps: getStaticProps나 getServerSideProps를 통해 전달받은 초기 데이터들
    // 1. 택배 상자(props)에서 내용물(Component-우리가 보고 싶어 한 '페이지 내용' 그 자체예요. (예: 자기소개 글, 사진들))과 메모지(pageProps-그 페이지를 보여주는 데 필요한 **'추가 정보'**들이 적힌 메모지예요. (예: 오늘 날씨 정보, 사용자 이름 등))를 꺼내요.
    const { Component, pageProps } = props;
    // 최종적으로 현재 페이지(Component)에 데이터(pageProps)를 주입하여 렌더링합니다.
    // 2. "이 내용물(Component)에 이 메모지(pageProps)를 붙여서 화면에 보여줘!"라고 시키는 거예요.
    return <Component {...pageProps} />;
}
// 이 컴포넌트가 기본값으로 내보내져야 Next.js가 인식합니다.
export default MyApp;

// r1
// AppProps(화면재료상자)불러오기
import type { AppProps } from "next/app";
function MyApp(props: AppProps) {
    // props(박스)에서 component(내용물),pageProps(추가정보)가져오기
    const { Component, pageProps } = props;
    // component(내용물)에 pageProps(정보)를 붙여서 화면 그리기
    return <Component {...pageProps} />;
}
// 컴포넌트 내보내기(next.js인식)
export default MyApp;


// 1. Next.js 본사에서 보내주는 '표준 택배 상자(AppProps)' 도면을 가져와요.
import type { AppProps } from "next/app";

function MyApp(props: AppProps) {
    // 2. 도착한 택배 상자(props)를 열어서 알맹이 두 개를 꺼냅니다.
    // - Component: 오늘 보여줄 '진짜 화면'(예: 홈화면, 내정보화면 등)
    // - pageProps: 그 화면을 그릴 때 필요한 '데이터 메모지'(예: 내 이름, 오늘 날씨 등)
    const { Component, pageProps } = props;

    // 3. '진짜 화면'에 '데이터 메모지'를 착! 붙여서 최종적으로 우리 눈에 보여줘요.
    // {...pageProps}는 메모지에 적힌 내용을 하나하나 다 전달한다는 뜻이에요.
    return <Component {...pageProps} />;
}

// 4. 이 조립법(MyApp)을 Next.js가 쓸 수 있게 밖으로 내보내요.
export default MyApp;

// r2
import type { AppProps } from "next/app";
function MyApp(props: AppProps) {
    const { Component, pageProps } = props;
    return <Component {...pageProps} />;
}
export default MyApp;

// r3
import type { AppProps } from "next/app";
function MyApp(props: AppProps) {
    const { Component, pageProps } = props;
    return <Component {...pageProps} />;
}
export default MyApp;

// r4
import type { AppProps } from "next/app";
function MyApp(props: AppProps) {
    const { Component, pageProps } = props;
    return <Component {...pageProps} />;
}
export default MyApp;

// r5
import type { AppProps } from "next/app";
function MyApp(props: AppProps) {
    const { Component, pageProps } = props;
    return <Component {...pageProps} />;
}
