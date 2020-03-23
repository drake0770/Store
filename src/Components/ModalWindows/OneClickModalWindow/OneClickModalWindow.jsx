import React from "react";
import Modal from 'react-modal';
import c from './OneClickModalWindow.module.css';
import {OneClickForm} from "./OneClickForm";

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

const OneClickModalWindow = (props) => {

    return <Modal
        isOpen={props.modalIsOpen}
        onRequestClose={props.closeModal}
        ariaHideApp={false}
        style={customStyles}
        contentLabel='OneClick Modal'
    >
        <div className={c.modal}>
            <div><span className={c.button} onClick={props.closeModal}>&#10006;</span></div>
            <div>Швидке замовлення</div>
            <OneClickForm onSubmit={props.onSubmit}/>
        </div>
    </Modal>
}


export default OneClickModalWindow;


