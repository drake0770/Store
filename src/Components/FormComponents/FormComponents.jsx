import React from "react";
import c from './FormComponents.module.css';

export const Textarea = ({input, meta, ...props}) => {
    return (<div>
        <div className={meta.error && meta.touched ? c.error : null}>
            <textarea className={c.textarea} {...input}{...props}/>
        </div>
        <div>
            {meta.error && meta.touched && <span>{meta.error}</span>}
        </div>
    </div>);
}

export const Input = ({input, meta, ...props}) => {
    return (<div className={c.input}>
        <div className={meta.error && meta.touched ? c.error : null}>
            <input  className={c.input} {...input}{...props}></input>
        </div>
        <div>
            {meta.error && meta.touched && <span>{meta.error}</span>}
        </div>
    </div>);
}
