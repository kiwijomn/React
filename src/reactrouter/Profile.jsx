import React from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import './FirstRouter.css';

const MyButton = styled.button`
    color: pink;
    background-color: purple;
    font-size: 15px;
`;

const Button = styled(MyButton)`
    padding: 1rem;
    margin: 1rem;
    display: flex;
    border-radius: 1rem;
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.color || "white"};
`;

function Profile() {
    let navigator = useNavigate();
    return (
        <div className="content">
            <p>이곳은 바로 Profile 페이지입니다.</p>
            <Button onClick={() => navigator('/')} backgroundColor="green" color="pink">홈으로</Button>
            <Button onClick={() => navigator('/about')} backgroundColor="purple">About으로</Button>
            <Button onClick={() => navigator('/')} backgroundColor="lavendar" color="lightblue">홈으로</Button>
        </div>
    )
}

export default Profile;