import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import {Link} from 'react-router-dom'
import '../css/Header.scss'
const HeaderComponent = () => {
    return (
        <div className="header-container">
            <Link to={'/home'}>
                Home 
            </Link>
            <Link to={'/todos'}>
                Todos App
            </Link>
            <Link to={'/crud'}>
                CRUD Page 
            </Link>
        </div>
    )
}

export default HeaderComponent;