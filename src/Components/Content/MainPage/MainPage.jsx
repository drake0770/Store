import React from "react";
import c from './MainPage.module.css'
import Product from "../Product/Product";

const MainPage = (props) => {
    return (<div>
        <div className={c.title}>Популярні товари:</div>
        <Product data={props.bestsell} addNewFastOrder={props.addNewFastOrder}/>
        <div className={c.title}>Новинки:</div>
        <Product data={props.newItems} addNewFastOrder={props.addNewFastOrder}/>
    </div>);
}

export default MainPage;