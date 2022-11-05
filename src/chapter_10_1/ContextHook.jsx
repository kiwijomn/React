import React, {useContext} from "react";

// 컨텍스트 객체 생성 (Provider가 있으므로 기본값은 의미 없음)
const ThemeContext = React.createContext('dark');

function ContextHook() {
    return (
        // 컨텍스트 객체를 사용할 수 있도록 제공, value는 lavender
        <ThemeContext.Provider value="lavender">
            <Toolbar/>
        </ThemeContext.Provider>
    )
}

function Toolbar() {
    return (
        <div>
            <ThemeButton/>
        </div>
    )
}

function ThemeButton() {
    return (
        <div>
            <Button/>
        </div>
    )
}

function Button() {
    // useContext훅을 통해 컨텍스트 구독을 요청
    // value에 Provider에서 설정한 lavender 값이 들어감
    const value = useContext(ThemeContext);
    return (
        <div style={{backgroundColor: value, margin: 50, padding: 50}}>
            <p>컨텍스트를 가지고 데이터를 전달하기</p>
            <button>확인</button>
        </div>
    )
}

export default ContextHook;