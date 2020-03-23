import React from "react";
import c from "./Cart.module.css";

const CartItem = (props) => {

    const setCurrentValue = (value, model) => {
        props.changeAmountThunk(value, model);
        let now = new Date(); alert(now);
    }

    const deleteItem = (id) => {
        props.deleteItemFromOrderThunk(id);
    }
    return (<div>
        <div className={c.order}>
            <div></div>
            <div className={c.title}>Товар</div>
            <div className={c.title}>Ціна</div>
            <div className={c.title}>Кількість</div>
            <div className={c.title}>Загальна вартість</div>
            <div></div>
        </div>
        {props.items.map(e => <div className={c.order}>
            <div className={c.aaa}><img className={c.img} src={e.img} alt='img'/></div>
            <div className={c.text}>{e.model}</div>
            <div className={c.text}>{e.price}$</div>
            <div className={c.text}>
                <input className={c.input} name={'inp'} onChange={v => setCurrentValue(v.target.value, e.model)} value={e.amount} type={'number'}
                        max={e.quantity}/>
            </div>
            <div className={c.text}>{e.totalPrice}$</div>
            <div className={c.text}>
                <button className={c.but} onClick={() => deleteItem(e.model)}>Вилучити</button>
            </div>
        </div>)}
        <div className={c.total}>Загальна вартість: {props.totalPurchasePrice}$</div>
    </div>);
}

export default CartItem;