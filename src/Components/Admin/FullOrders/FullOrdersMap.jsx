import React from "react";
import c from "../ordersPage.module.css";

const FullOrdersMap = (props) => {
    return (<div>
        {props.fullOrders.map(p => <div className={c.container}>
            <div className={c.row}>
                <span>{p.orderid}</span>
            </div>
            <div><span className={c.row}>{p.date}</span></div>
            <div className={c.fastrow}>
                <div><span>Імя:</span> {p.buyer.fName}</div>
                <div><span>Прізвище:</span> {p.buyer.lName}</div>
                <div><span>Номер телефону:</span> {p.buyer.number}</div>
                <div><span>Електронна пошта:</span> {p.buyer.email}</div>
                <div><span>Адресса:</span> {p.buyer.address}</div>
            </div>
            <div>
                <div className={c.fastrow}>{p.purchase.map(n => <div>
                    <div><span>Модель:</span> {n.model}</div>
                    <div><span>Кількість:</span> {n.amount}</div>
                    <div><span>Ціна:</span> {n.price}$</div>
                    <br/>
                </div>)}
                </div>
            </div>
            <div className={c.row}><span>{p.total}$</span></div>
            <div className={c.row}>{!p.completed ? <button onClick={() => props.changeOrderStatus('full', p.orderid)}
                                                           className={c.statusButton}>Виконано</button> :
                <span>Виконано</span>}</div>
        </div>) }
    </div>);
}
export default FullOrdersMap;
