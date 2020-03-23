import React, {useState} from "react";
import c from './Cart.module.css';
import CartForm from "./Form";
import {NavLink} from "react-router-dom";
import ThankModal from "../ModalWindows/ThankModalWindow/ThankModal";
import CartItem from "./CartItem";

const Cart = (props) => {
    const onSubmit = (formData) => {
        props.items.forEach(e =>
            props.changeQuantity(e.model, e.type, e.amount)
        );
        props.addNewFullOrder(formData, props.items, props.totalPurchasePrice);
        props.clearCart()
        openModal();
    }
    const [modalIsOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    }
    const closeModal = () => {
        setIsOpen(false);
    }

    return (<div className={c.cart}>
        <NavLink to={'/'} className={c.back}>
            {'<На головну'}
        </NavLink>

        {props.items.length > 0 ?
            <div><CartItem items={props.items} deleteItemFromOrderThunk={props.deleteItemFromOrderThunk}
                           changeAmountThunk={props.changeAmountThunk} totalPurchasePrice={props.totalPurchasePrice}/>
                <CartForm onSubmit={onSubmit}/></div> : <div className={c.empty}>Ви поки що нічого не придбали</div>}
        <ThankModal modalIsOpen={modalIsOpen} closeModal={closeModal}/>
    </div>);
}

export default Cart;