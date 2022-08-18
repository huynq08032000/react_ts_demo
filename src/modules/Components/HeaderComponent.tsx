import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import {Link} from 'react-router-dom'
import '../css/Header.scss'
import { ROUTES } from "../../config/ROUTES";
const HeaderComponent = () => {
    return (
        <div className="header-container">
            <Link to={ROUTES.home}>
                Home 
            </Link>
            <Link to={ROUTES.todos}>
                Todos App
            </Link>
            <Link to={ROUTES.crud}>
                CRUD Page 
            </Link>
            <Link to={ROUTES.loadmore}>
                Loadmore Page
            </Link>
        </div>
    )
}

export default HeaderComponent;