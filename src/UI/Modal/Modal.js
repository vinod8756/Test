import React from 'react';
import classes from './Modal.module.css'

const Modal = (props) => {

    const dismissHandler = () => {
        props.dissmiss(false)
    }
    return (
        <div className = {classes.modal}>
            <h5>Login Successfull</h5>
            <button onClick = {dismissHandler}>Dismiss</button>
        </div>
    );
};

export default Modal;