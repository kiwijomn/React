import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './SecondRouter.css'
import Home from './Home';
import About from './About';
import BookRoutes from './BookRoutes';
import NotFound from './NotFound';

function SecondRouterModified() {
    return (
        <BrowserRouter>
            <nav>
                <Link to={'/'} className="item">Home</Link>
                <Link to={'/about'} className="item">About</Link>
                <Link to={'/books'} className="item">Books</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/books/*" element={<BookRoutes/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default SecondRouterModified;