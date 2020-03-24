import React from "react";
import c from "../ordersPage.module.css";
import FastandInformOrdersMap from "./FastandInformOrdersMap";

const FastandInformOrders = (props) => {
    return (<div>
        <hr/>
        <div className={c.fastContainer}>
            <div className={c.title}> Номер:</div>
            <div className={c.title}> Дата:</div>
            <div className={c.title}> Покупець:</div>
            <div className={c.title}> Контакний номер:</div>
            <div className={c.title}>Замовлення:</div>
            <div className={c.title}>Статус:</div>
        </div>

        {props.data.length > 0 ? <FastandInformOrdersMap type={props.type} data={props.data} changeOrderStatus={props.changeOrderStatus}/>
            : <div>Замовлень немає </div>}
    </div>);
};

export default FastandInformOrders;