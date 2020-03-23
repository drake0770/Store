import React from "react";
import c from './NotFoundPage.module.css'
import {NavLink} from "react-router-dom";

const NotFoundPage = () => {
    return (<div className={c.page}>
        <div className={c.title}>Нажаль даної сторінки не існує</div>
        <NavLink to={'/'}>
            <button className={c.button}>Повернутись на головну</button>
        </NavLink>
    </div>);
}

export default NotFoundPage;