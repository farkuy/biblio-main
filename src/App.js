import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import BookPage from "./Pages/BookPage";
import User from "./User/User";
import Navbar from "./Navbar/Navbar";
function App() {
    const userBiblio = [];
    localStorage.setItem(`userBiblio`, JSON.stringify(userBiblio))

    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path={`/`} element={<BookPage/>}/>
                <Route path={`/user`} element={<User/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
