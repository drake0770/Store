import {connect} from "react-redux";
import FullOrders from "./FullOrders/FullOrders";
import React, {useState} from "react";
import FastandInformOrders from "./FastandInform/FastandInformOrders";
import c from './ordersPage.module.css';
import {changeOrderStatus} from "../../Redux/order-reducer";

const OrdersPageContainer = (props) => {
    const [nav, setNav] = useState(1);

    return (<div className={c.orders}>
        <button className={c.button} onClick={() => setNav(1)}>Замовлення</button>
        <button className={c.button} onClick={() => setNav(2)}>Швидкі замовлення</button>
        <button className={c.button} onClick={() => setNav(3)}>Повідомити про наявність</button>

        {nav === 1 && <FullOrders fullOrders={props.full} changeOrderStatus={props.changeOrderStatus}/>}
        {nav === 2 &&
        <FastandInformOrders type={'fast'} data={props.fast} changeOrderStatus={props.changeOrderStatus}/>}
        {nav === 3 &&
        <FastandInformOrders type={'inform'} data={props.inform} changeOrderStatus={props.changeOrderStatus}/>}
    </div>);
}

const mapStateToProps = (state) => {
    return {
        full: state.orderPage.full,
        fast: state.orderPage.fast,
        inform: state.orderPage.inform
    }
}

export default connect(mapStateToProps, {changeOrderStatus})(OrdersPageContainer);