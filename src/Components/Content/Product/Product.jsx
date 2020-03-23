import c from "./Content.module.css";
import {NavLink} from "react-router-dom";
import React, {useState} from "react";
import OneClickModalWindow from "../../ModalWindows/OneClickModalWindow/OneClickModalWindow";
import ThankModal from "../../ModalWindows/ThankModalWindow/ThankModal";

const Product = (props) => {
    const [formModalIsOpen, setFormIsOpen] = useState(false);
    const [type, setType] = useState('');
    const [thankModalIsOpen, setthankIsOpen] = useState(false);
    const [order, setOrder] = useState('');
    const buyInOneClick = (model) => {
        setOrder(model);
        setType('addFastOrder');
        openFormModal();
    }
    const inform = (model) => {
        setOrder(model);
        setType('addNewInform');
        openFormModal();
    }
    const openFormModal = (model) => {
        setFormIsOpen(true);
    }
    const closeFormModal = () => {
        setFormIsOpen(false);
    }
    const openThankModal = (model) => {
        setthankIsOpen(true);
    }
    const closeThankModal = () => {
        setthankIsOpen(false);
    }
    const onSubmit = (formData) => {
        props.addNewFastOrder(type, formData, order);
        closeFormModal();
        openThankModal(true);
    }
    return (<div className={c.content}>
        {
            props.data.map(p => <div className={c.item} key={p.id}>
                    <NavLink to={`/product/${p.type}/${p.model}`} className={c.text}>
                        <div><img className={c.img} src={p.img} alt='img'/></div>
                        <div>  {p.model} </div>
                    </NavLink>
                    <div>{p.price}$</div>
                    <div className={c.but}>
                        {p.quantity > 0 ? <button onClick={() => buyInOneClick(p.model)}>Купити в 1 клік</button> :
                            <button onClick={() => inform(p.model)}>Повідомити про наявність</button>
                        }
                    </div>
                </div>
            )
        }
        <OneClickModalWindow closeModal={closeFormModal} modalIsOpen={formModalIsOpen} onSubmit={onSubmit}/>
        <ThankModal modalIsOpen={thankModalIsOpen} closeModal={closeThankModal}/>
    </div>);
}

export default Product;