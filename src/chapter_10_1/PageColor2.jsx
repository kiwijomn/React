import React, {useState, useContext} from "react";
import './PageColor.css';

// footer의 button onCick 사용이 궁금해져서 컨텍스트로 넘겨주는 함수를 바꿔봄 ...

// 컨텍스트 객체 생성 기본값은 null
const ColorContext = React.createContext(null);

function PageColor2() {
    // 현재 색상 상태 판별을 위한 state 변수와 함수 설정, false로 초기화
    const [isDark, setIsDark] = useState(false);
    const toggleColor = () => {setIsDark(!isDark);}

    return (
        // 컨텍스트를 사용할 수 있게 제공, value로 state 변수와 함수를 넘김
        <ColorContext.Provider value={{isDark, toggleColor}}>
            <Page/>
        </ColorContext.Provider>
    )
}

// Header, Content, Footer 3개의 컴포넌트를 Page 컴포넌트에 합성
function Page() {
    return (
        <div className="page">
            <Header/>
            <Content/>
            <Footer/>
        </div>
    )
}

// Header 컴포넌트 - isDark 컨텍스트 사용
function Header() {
    // useContext훅을 통해 ColorContext 객체의 value를 isDark 변수에 넘겨줌
    const {isDark} = useContext(ColorContext);

    return (
        // 
        <header className="header" 
        // 다크모드면(isDark가 true) 배경색은 검정 & 글씨는 흰색, 
        // 다크모드가 아니면(isDark가 false) 배경색은 연회색 & 글씨는 검정색으로 설정
        style={{backgroundColor: isDark ? 'black' : 'lightgray', color: isDark ? 'white' : 'black'}}>
            <h2>컨텍스트 사용 강의</h2>
        </header>
    )
}

// Content 컴포넌트 - isDark 컨텍스트 사용
function Content() {
    // useContext훅을 통해 ColorContext 객체의 value를 isDark 변수에 넘겨줌
    const {isDark} = useContext(ColorContext);

    return (
        <content className="content" 
        // 다크모드면(isDark가 true) 배경색은 검정 & 글씨는 흰색, 
        // 다크모드가 아니면(isDark가 false) 배경색은 연회색 & 글씨는 검정색으로 설정
        style={{backgroundColor: isDark ? 'black' : 'lightgray', color: isDark ? 'white' : 'black'}}>
            <h2>오늘은 리액트 10주차 강의이며, Context를 배우고 있습니다.</h2>
        </content>
    )
}

// Footer 컴포넌트 - isDark와 setIsDark 컨텍스트 사용
function Footer() {

    const {isDark, toggleColor} = useContext(ColorContext);

    return (
        <footer className="footer"
        // 다크모드면(isDark가 true) 배경색은 검정 & 글씨는 흰색, 
        // 다크모드가 아니면(isDark가 false) 배경색은 연회색 & 글씨는 검정색으로 설정
        style={{backgroundColor: isDark ? 'black' : 'lightgray', color: isDark ? 'white' : 'black'}}>
            {/* 버튼 클릭시 toggleColor 함수 실행 */}
            <button className="button" onClick={toggleColor}>색상 반전</button>
        </footer>
    )
}

export default PageColor2;