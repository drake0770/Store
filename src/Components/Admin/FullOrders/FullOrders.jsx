import React from "react";
import c from '../ordersPage.module.css';
import FullOrdersMap from "./FullOrdersMap";

const FullOrders = (props) => {

    return (<div>
        <hr/>
        <div className={c.container}>
            <div className={c.title}> Номер:</div>
            <div className={c.title}> Дата:</div>
            <div className={c.title}> Покупець:</div>
            <div className={c.title}>Замовлення:</div>
            <div className={c.title}>Заг. ціна:</div>
            <div className={c.title}>Статус:</div>
        </div>
        {props.fullOrders.length > 0 ?
            <FullOrdersMap fullOrders={props.fullOrders} changeOrderStatus={props.changeOrderStatus}/> :
            <div>Замовлень немає </div>}
    </div>);
}

export default FullOrders;