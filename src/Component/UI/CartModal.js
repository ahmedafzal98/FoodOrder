import ReactDom from "react-dom";
import classes from './CartModal.module.css'
import React from 'react';

const Backdrop = (props) => {

    return (
        <div onClick={props.onHideCart} className={classes.backdrop}></div>
    )
}
const Overlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const CartModal = (props) => {
    return (
        <React.Fragment>
            {ReactDom.createPortal(<Backdrop onHideCart={props.onHideCart} />, document.getElementById('overlay'))}
            {ReactDom.createPortal(<Overlay>{props.children}</Overlay>, document.getElementById('overlay'))}
        </React.Fragment>
    );
}

export default CartModal;