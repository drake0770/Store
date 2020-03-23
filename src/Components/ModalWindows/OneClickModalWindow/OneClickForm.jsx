import c from "./OneClickModalWindow.module.css";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../FormComponents/FormComponents";
import {emptyField, maxLength, number} from "../../FormComponents/Validators";
import React from "react";
const overSize20 = maxLength(20);
const overSize11 = maxLength(11);


const Form = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div className={c.formItem}> Введіть ваше ім'я:<Field component={Input} name={'name'}
                                                              validate={[emptyField, overSize20]}/>
        </div>
        <div className={c.formItem}> Введіть ваш контактний номер телефону:<Field component={Input} name={'number'}
                                                                                  data-inputmask="'mask': '+380(99)999-99-99'"
                                                                                  validate={[emptyField, number, overSize11]}/>
        </div>
        <div>
            <button className={c.close}>Замовити</button>
        </div>
    </form>
}

export  const OneClickForm = reduxForm({
    form: 'cart'
})(Form);