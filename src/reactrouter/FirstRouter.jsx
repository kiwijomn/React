import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import React, {useState} from "react";
import './FirstRouter.css';
import Home from './Home';
import About from './About';
import Profile from './Profile';


function FirstRouter() {
    const [numCount, setNumCount] = useState(0);

    const resetData = () => {setNumCount(0);}

    return (
        <BrowserRouter>
            <nav>
                <Link to={'/'} className="item">Home</Link>
                <Link to={'/about'} className="item">About</Link>
                <Link to={'/profile'} className="item">Profile</Link>
            </nav>
            <Routes>
                    <Route path='/' element={<Home resetData={resetData}/>}/>
                    {/* <Route path='/home' element={<Home/>}/> */}
                    <Route path='/about' element={<About data={numCount} setNum={setNumCount}/>}/>
                    <Route path='/profile' element={<Profile/>}/>
                
            </Routes>
            <footer>(C)opyright 모바일웹</footer>
        </BrowserRouter>
    )
}

export default FirstRouter;