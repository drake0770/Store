import React from "react";
import c from "../ordersPage.module.css";

const FastandInformOrdersMap = (props) => {
    return (<div>
        {props.data.map(q => <div className={c.fastContainer}>
            <div className={c.row}>{q.orderid}</div>
            <div className={c.row}>{q.date}</div>
            <div className={c.row}> {q.number}</div>
            <div className={c.row}> {q.name}</div>
            <div className={c.row}> {q.order}</div>
            <div className={c.row}>{!q.completed ?
                <button onClick={() => props.changeOrderStatus(props.type, q.orderid)}
                        className={c.statusButton}>Виконано</button> : <span>Виконано</span>}</div>
        </div>)}
    </div>);
}

export default FastandInformOrdersMap;