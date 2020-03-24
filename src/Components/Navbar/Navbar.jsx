import React from "react";
import c from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {

    return (<div className={c.sidebar}>
        <div className={c.title}>&#9776; Каталог товарів</div>
        <div className={c.navBlock}>
            <div><NavLink to='/Store/catalog/iphone'  className={c.navItem} activeClassName={c.active}>Iphone</NavLink></div>
            <div><NavLink to='/Store/catalog/ipad' className={c.navItem} activeClassName={c.active}>Ipad</NavLink></div>
            <div><NavLink to='/Store/catalog/mac' className={c.navItem} activeClassName={c.active}>Mac</NavLink></div>
            <div><NavLink to='/Store/catalog/watch' className={c.navItem} activeClassName={c.active}>Watch</NavLink></div>
            <div><NavLink to='/Store/catalog/accestories' className={c.navItem} activeClassName={c.active}> Accestories </NavLink></div>

        </div>
    </div>);
};


export default Navbar;