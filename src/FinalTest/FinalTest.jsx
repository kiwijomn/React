import React, {useState} from "react";
import styled from "styled-components";
import './PassingCount.css';

const FirstChild = (props) => {
    const StyledChild = styled.div`
    background-color: lightpink;
    border-radius: 30%;
    `;

    console.log(`자식1 ${props.data}`);
    return (
        <StyledChild>
            <p> 자식1 컴포넌트 </p>
            <p> (카운터: {props.data}) </p>
        </StyledChild>
        )
    };

const SecondChild = (props) => {
    const onLeftClick = ( ) => props.setLeft((prev) => parseInt(prev) + 1);
    const onRightClick = ( ) => props.setRight((prev) => parseInt(prev) + 1);
    console.log("자식2 (버튼)");
    
    return (
        <div className="second">
            <p> 자식2 컴포넌트 </p>
            <button onClick={onLeftClick} > ◀ 카운터++ </button>
            <button onClick={props.resetData} > 카운터 0 </button>
            <button onClick={onRightClick} > 카운터++ ▶ </button>
        </div>
    )
};

const ThirdChild = (props) => {
    console.log(`자식3 ${props.data}`);
    return (
        <div className="third">
            <p> 자식3 컴포넌트 </p>
            <p> (카운터: {props.data}) </p>
        </div>
    )
};

function FinalTest() {
    const [leftCount, setLeftCount] = useState(0);
    const [rightCount, setRightCount] = useState(0);
    const resetData = () => {setLeftCount(0); setRightCount(0);}

    return (
        <div className="parent">
            부모컴포넌트 <br/>
            (왼쪽카운트: {leftCount}, 오른쪽카운트: {rightCount})
            <div className="layout">
                <FirstChild data={leftCount} />
                <SecondChild setLeft={setLeftCount} setRight={setRightCount} resetData={resetData} />
                <ThirdChild data={rightCount} />
            </div>
        </div>
    )
}

export default FinalTest;