import React from "react";

// 컨텍스트 객체생성 (Provider가 있으므로 기본값은 의미 없음)
const ThemeContext = React.createContext('light');

function ContextApp() {
    return (
        // 컨텍스트를 사용할 수 있도록 제공, value는 lavender
        <ThemeContext.Provider value='lavender'>
            <Toolbar/>
        </ThemeContext.Provider>
    )
}

// Toolbar 컴포넌트
function Toolbar() {
    return (
        <div>
            <ThemeButton/>
        </div>
    )
}

// ThemeButton 컴포넌트
function ThemeButton() {
    return (
        <div>
            <Button/>
        </div>
    )
}

// Button 컴포넌트
function Button() {
    return (
        <div>
            {/* 컨텍스트를 참조할 수 있도록 구독 요청 */}
            <ThemeContext.Consumer>
                {/* 컨텍스트 value를 Button 컴포넌트에서 속성으로 바로 사용 */}
                {value => 
                (<div style={{backgroundColor: value, margin: 50, padding: 50}}>
                    <p>컨텍스트를 가지고 데이터를 전달하는 예</p>
                    <button>확인</button>
                </div>)}
            </ThemeContext.Consumer>
        </div>
    )
}

export default ContextApp;