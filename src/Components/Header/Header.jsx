import React from "react";
import c from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props)=>{

    return(<div className={c.header}>
        <NavLink to={'/'}> <div className={c.logo}>Logo</div> </NavLink>
        <NavLink  to={'/admin'}><div className={c.admin}>Admin page</div> </NavLink>
        <div className={c.cart}>
        <NavLink className={c.nav} to={'/cart'}> Корзина</NavLink>
        </div>
    </div>);
}

export default Header;