import React, {useState} from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {

    const [biblio, setBiblio] = useState(`active`);
    const [user, setUser] = useState(``)

    const activateBiblio = () => {
        setBiblio(`active`);
        setUser(``)
    }
    const activateUser = () => {
        setBiblio(``);
        setUser(`active`)
    }

    return (
        <div>
            <div className="container">
                <header className="d-flex justify-content-center py-3">
                    <ul className="nav nav-pills">
                        <li onClick={activateBiblio} className="nav-item"><Link to="/" className={`nav-link ${biblio}`}>Библиотека</Link></li>
                        <li onClick={activateUser} className="nav-item"><Link to="/user" className={`nav-link ${user}`}>Пользователь</Link></li>
                    </ul>
                </header>
            </div>
        </div>
    );
};

export default Navbar;