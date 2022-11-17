//서버 쪽을 access 할 수 없어 트래픽이 생기지 않음 -> 서버를 안 가도 client에서 해결하니 빠름
//그런 의미에서 리액트가 성능이 좋당..
import { Route, Routes } from "react-router-dom";
import React, {useState, useContext} from "react";
// import NewBook from './NewBook';
import Book from './Book';
import BookList from './BookList';
import BookLayout from './BookLayout';
import './SecondRouter.css';

const ColorContext = React.createContext('light');

function BookRoutes() {
    const [isDark, setIsDark] = useState(false);
    return (
        <div>
            
            <BookLayout/>
            <Routes>
                <Route index element={<BookList/>}/>
                <Route path=":id" element={<Book/>}/>
                <Route path="new" element={
                <ColorContext.Provider value={{isDark, setIsDark}}>
                <NewBook/>
                </ColorContext.Provider>
                }/>
            </Routes>
        </div>
    )
}

function NewBook() {
    const {isDark, setIsDark} = useContext(ColorContext);
    const toggleColor = () => {setIsDark(!isDark);}
    return (
        <button style={{backgroundColor: isDark ? 'black' : 'lightgray', color: isDark ? 'white' : 'black'}} onClick={toggleColor}>
            색상 반전
        </button>
    )
}

export default BookRoutes;