import React, {useState} from "react";
import './Specialization.css';

function Dialog (props) {
    return(
        <div className="Dialog" style={{backgroundColor: props.color}}>
            <h1 className="Dialog-title">{props.title}</h1>
            <h3 className="Dialog-message">{props.message}</h3>
            {props.children}
        </div>
    )
}

function Specialization () {
    const [name, setName] = useState('');

    const handleChange = (e) => {
        setName(e.target.value);
    }

    const onClickWanring = () => {alert(`오류메세지입니다. 주의하세요!`);}
    const onClickIgnore = () => {}
    const onClickEnter = () => {}

    return(
        <>
        <Dialog
            title="WARNING" message="경고입니다!" color="#FCF0CA">
            <button onClick={onClickWanring}>경고 확인</button>
            <button onClick={onClickIgnore}>무시하기</button>
        </Dialog>
        <br/>
        <Dialog
            title="HELLO" message="환영합니다!" color="#D8D2FF">
            <p>이름을 입력해주세요.</p>
            <input value={name} onChange={handleChange}/>
            <br></br>
            <button onClick={onClickEnter}>입장하기</button>
        </Dialog>
        <br/>
        <Dialog
            title="ERROR" message="오류를 확인하세요!!" color="#FFD2EA">
            <img src="error.png"/>
        </Dialog>
        <br/>
        <Dialog
            title="Notice" message="공지사항 확인" color="#CAFCE6">
            <ul>
                <li><a href="#">리액트 안내사항</a></li>
                <li><a href="#">리액트 도움말</a></li>
                <li><a href="#">리액트 버전 확인</a></li>
            </ul>
        </Dialog>
        </>
    );
}

export default Specialization;