import React from "react";
import c from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = ()=>{

    return(<div className={c.header}>
        <NavLink to={'/'}> <div className={c.logo}>Logo</div> </NavLink>
        <NavLink  to={'/Store/admin'}><div className={c.admin}>Admin page</div> </NavLink>
        <div className={c.cart}>
        <NavLink className={c.nav} to={'/Store/cart'}> Корзина</NavLink>
        </div>
    </div>);
};

export default Header;