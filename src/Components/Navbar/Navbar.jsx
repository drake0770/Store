import React from "react";
import c from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = (props) => {

    return (<div className={c.sidebar}>
        <div className={c.title}>&#9776; Каталог товарів</div>
        <div className={c.navBlock}>
            <div><NavLink to='/catalog/iphone'  className={c.navItem} activeClassName={c.active}>Iphone</NavLink></div>
            <div><NavLink to='/catalog/ipad' className={c.navItem} activeClassName={c.active}>Ipad</NavLink></div>
            <div><NavLink to='/catalog/mac' className={c.navItem} activeClassName={c.active}>Mac</NavLink></div>
            <div><NavLink to='/catalog/watch' className={c.navItem} activeClassName={c.active}>Watch</NavLink></div>
            <div><NavLink to='/catalog/accestories' className={c.navItem} activeClassName={c.active}> Accestories </NavLink></div>

        </div>
    </div>);
}


export default Navbar;