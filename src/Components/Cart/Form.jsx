import React from "react";
import {Field, reduxForm} from 'redux-form';
import c from './Cart.module.css';
import {Input, Textarea} from "../FormComponents/FormComponents";
import {emptyField, maxLength, number} from "../FormComponents/Validators";

const overSize20 = maxLength(20);
const overSize40 = maxLength(40);
const overSize11 = maxLength(11);

const Form = (props) => {


    return (<div className={c.form}>
        <h3 className={c.total}>Введіть будь ласка ваші контактні дані для замовлення:</h3>
        <form onSubmit={props.handleSubmit}>

            <div className={c.formItem}> Прізвище:*<Field component={Input} name={'fName'}
                                                          validate={[emptyField, overSize20]}/></div>
            <div className={c.formItem}>Імя:*<Field component={Input} name={'lName'}
                                                    validate={[emptyField, overSize20]}/></div>
            <div className={c.formItem}>Телефон:*<Field component={Input} name={'number'}
                                                        validate={[emptyField, overSize11, number]}/></div>
            <div className={c.formItem}>Електронна пошта:<Field component={Input} name={'email'}
            /></div>
            <div className={c.formItem}>Адреса:*<Field component={Textarea} name={'address'}
                                                       validate={[emptyField, overSize40]}
            /></div>
            <button className={c.but}>Замовити</button>
        </form>
        <p className={c.total}>* - поля обов'язкові для заповнення</p>
    </div>)
}

const CartForm = reduxForm({
    form: 'cart'
})(Form);

export default CartForm;

