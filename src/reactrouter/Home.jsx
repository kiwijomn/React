import React from "react";

import './FirstRouter.css';

function Home(props) {
    return (
        <div>
            <div className="content">Home 페이지입니다.</div>
            <button onClick={props.resetData}> 초기화 </button>
        </div>
    )
}

export default Home;