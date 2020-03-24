import React, {useState} from "react";
import c from './Item.module.css';
import {NavLink} from "react-router-dom";
import OneClickModalWindow from "../../ModalWindows/OneClickModalWindow/OneClickModalWindow";
import ThankModal from "../../ModalWindows/ThankModalWindow/ThankModal";

const Item = (props) => {
    const buy = () => {
        props.addItemOrderThunk(props.currentItem);
    };
    const [formModalIsOpen, setFormIsOpen] = useState(false);
    const [thankModalIsOpen, setThankIsOpen] = useState(false);

    const openFormModal = () => {
        setFormIsOpen(true);
    };
    const closeFormModal = () => {
        setFormIsOpen(false);
    };
    const openThankModal = () => {
        setThankIsOpen(true);
    };
    const closeThankModal = () => {
        setThankIsOpen(false);
    };
    const onSubmit = (formData) => {
        props.addNewFastOrder('addNewInform', formData, props.currentItem.model);
        closeFormModal();
        openThankModal(true);
    };
    return (<div className={c.item}>

        <div className={c.imgBlock}>
            <NavLink to={`/Store/catalog/${props.currentItem.type}`} className={c.back}>
                {'<Назад'}
            </NavLink>
            <img className={c.img} src={props.currentItem.img} alt='img'/></div>
        <div className={c.other}>
            <div className={c.title}>{props.currentItem.model}</div>
            <div className={c.text}>{props.currentItem.price}$</div>
            <div>
                {
                    props.currentItem.quantity > 0 ? <div>
                            {props.currentItem.quantity === 1 ? <div className={c.textRed}>Залишився тільки 1</div> :
                                <div className={c.text}>Внаявноті</div>
                            }
                            <NavLink to={'/Store/cart'}>
                                <button onClick={buy} className={c.but}>Купити</button>
                            </NavLink></div>
                        :
                        <div>
                            <div className={c.text}>Відсутній у продажі</div>
                            <button onClick={() => openFormModal()} className={c.but}>Повідомити про наявність</button>
                        </div>
                }
            </div>
        </div>
        <div className={c.desc}>{props.currentItem.description}</div>
        <OneClickModalWindow closeModal={closeFormModal} modalIsOpen={formModalIsOpen} onSubmit={onSubmit}/>
        <ThankModal modalIsOpen={thankModalIsOpen} closeModal={closeThankModal}/>
    </div>);
};

export default Item;