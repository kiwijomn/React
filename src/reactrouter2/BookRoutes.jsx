//서버 쪽을 access 할 수 없어 트래픽이 생기지 않음 -> 서버를 안 가도 client에서 해결하니 빠름
//그런 의미에서 리액트가 성능이 좋당..
import { Route, Routes } from "react-router-dom";
import NewBook from './NewBook';
import Book from './Book';
import BookList from './BookList';
import BookLayout from './BookLayout';
import './SecondRouter.css';

function BookRoutes() {
    return (
        <div className="content">
            <BookLayout/>
            <Routes>
                <Route index element={<BookList/>}/>
                <Route path=":id" element={<Book/>}/>
                <Route path="new" element={<NewBook/>}/>
            </Routes>
        </div>
    )
}

export default BookRoutes;