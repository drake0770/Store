import React from "react";
import c from './Bottom.module.css';

const Bottom = (props) => {
    return (<div className={c.bottom}>
        <div className={c.flex}>
            <div>
                <p> тел. 0 800 000 000 (Безкоштовно) </p>
                <p> тел. +38 (000) 000 000 0 </p>
                <p> тел. +38 (000) 000 000 0 </p>
            </div>
            <div>
                <h3> Графік роботи: </h3>
                <p> Понеділок - Субота: 10:00- 20:00 год </p>
                <p> Неділя: 12:00 - 18:00 год </p>
            </div>
        </div>
        <div className={c.year}>2015 - 2020 Магазин техніки</div>
    </div>);
}

export default Bottom;