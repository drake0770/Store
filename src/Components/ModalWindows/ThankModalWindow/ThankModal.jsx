import React from "react";
import Modal from 'react-modal';
import c from './ThankModal.module.css';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: "black"
    }
};

const ThankModal = (props) => {
    return <Modal
        isOpen={props.modalIsOpen}
        onRequestClose={props.closeModal}
        ariaHideApp={false}
        style={customStyles}
        contentLabel='Cart Modal'
    >
        <div className={c.modal}>
            <div><span className={c.button} onClick={props.closeModal}>&#10006;</span></div>
            <div className={c.text}> Дякуємо за Ваше замовлення. Очікуйте дзвінка від менеджера.</div>
            <div>
                <button className={c.close} onClick={props.closeModal}>Закрити</button>
            </div>
        </div>
    </Modal>
}
export default ThankModal;