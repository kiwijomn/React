import React from "react";
import './FirstRouter.css';

function About(props) {
    const onNumCount = () => {props.setNum((prevNum) => parseInt(prevNum) + 1);}
    return (
        <div>
            <div className="content">이곳은 바로 About 페이지입니다.</div>
            <button onClick={onNumCount}>카운터</button>
            <p>카운트!! 현재: {props.data}</p>
        </div>
    )
}

export default About;