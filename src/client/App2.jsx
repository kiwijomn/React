import React, {useState, useEffect, useReducer} from "react";
import './App.css';

const serverURL = "http://localhost:65020/users";

function App2() {
    const [userData, setUserData] = useState(null);

    const getUserData = () => {
        fetch(serverURL)
        .then((res) => res.json())
        .then((data) => setUserData(data))
        .then(console.log(userData))
    }

    useEffect(getUserData, []); //mount시에만(처음에 한번만) 서버데이터를 가져오도록

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const id = e.target.id.value;
        const passwd = e.target.passwd.value;
        console.log("Submit 버튼 클릭 후 서버로 POST 전송");

        fetch(serverURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, id, passwd}),
        })
        .then(getUserData())
    }

    const[isUser, setIsUser] = useState(false); // 회원이 맞는지 아닌지 판단하기 위한 state 변수

    const onConfirmHandler = (e) => {
        e.preventDefault();
        // 입력값을 받음
        const id = e.target.id.value;
        const passwd = e.target.passwd.value;

        // map함수를 이용해 id와 password가 일치하면 state변수를 true로, 그렇지 않으면 false로 지정
        userData.map((user, i) => {
            if((user.id === id) && (user.passwd === passwd)) {
                setIsUser(true);
                console.log((userData));
                return isUser;
            }
            else {
                setIsUser(false);
                console.log((userData));
                return isUser;
            }
        })
    }

    return (
        <>
        <div>
            <h2>회원 등록</h2>
            <form onSubmit={onSubmitHandler}>
                <input type="text" name="name" placeholder="이름"/>
                <input type="text" name="id" placeholder="아이디"/>
                <input type="text" name="passwd" placeholder="암호"/>
                <button type="submit"> 등록 </button>
            </form>
        </div>
        <p></p>
        <div>
            <h2>회원 확인</h2>
            <form onSubmit={onConfirmHandler}>
                <input type="text" name="id" placeholder="아이디"/>
                <input type="text" name="passwd" placeholder="암호"/>
                <button type="submit"> 확인 </button>
                {/* state변수 값에 따른 회원 확인 메세지 출력 */}
                {isUser ? (<p>회원으로 확인되었습니다.</p>) : (<p>그런 회원은 없습니다.</p>)}
            </form>
        </div>
        <p></p>
        <div>
            <h2>회원 명단</h2>
            <ol>
                {(userData === null) //데이터가 수신 되었는지 확인
                ? (<p>서버에서 데이터를 가져오는 중 ...</p>)
                : (userData.map((user, i) => (<li key={user.keyid}> {user.name} {user.id} {user.passwd} </li>))
                )}
            </ol>
        </div>
        </>
    )
}

export default App2;