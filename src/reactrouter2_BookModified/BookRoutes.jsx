//서버 쪽을 access 할 수 없어 트래픽이 생기지 않음 -> 서버를 안 가도 client에서 해결하니 빠름
//그런 의미에서 리액트가 성능이 좋당..
import { Route, Routes, Link, BrowserRouter } from "react-router-dom";
import NewBook from './NewBook';
import Book from './Book';
import BookList from './BookList';
// import BookLayout from './BookLayout';
import './SecondRouter.css';

function BookRoutes() {
    return (
        //<BrowserRouter>
        <div className="content">
            {/* 수정한 부분: BookLayout 컴포넌트를 삭제하고 ol로 추가해줌 */}
            {/* 수정해본 이유: BrowserRouter 매핑 컴포넌트로 감싸주지 않아도 되는지 궁금해서 */}
            {/* 수정 결과: 오히려 BrowserRouter로 감싸주면 나오지가 않는다 ... 최상위 컴포넌트에서만 사용 가능하기 때문! */}
            <div>
                <ol>
                    <li><Link to={'/books/1'}>Book 1</Link></li>
                    <li><Link to={'/books/2'}>Book 2</Link></li>
                    <li><Link to="/books/3">Book 3</Link></li>
                    <li><Link to="/books/new">new Book</Link></li>
                </ol>
            </div>

            <Routes>
                <Route index element={<BookList/>}/>
                {/* <Route path="/" element={<BookList/>}/>  --> index와 같은 표현*/}
                <Route path="/:id" element={<Book/>}/>
                <Route path="/new" element={<NewBook/>}/>
            </Routes>
        </div>
        //</BrowserRouter>
        
    )
}

export default BookRoutes;