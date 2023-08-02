import React from 'react';
import CartModal from '../UI/CartModal';
import classes from './Cart.module.css';

const Cart = (props) => {

    return (
        <React.Fragment>
            <CartModal onHideCart={props.onHideCart} className={classes['cart-items']}>
                <div className={classes.total}>
                    <span>Total Amount</span>
                    <span>32.55</span>
                </div>
                <div className={classes.actions}>
                    <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
                    <button className={classes.button}>Order</button>
                </div>
            </CartModal>

        </React.Fragment>
    );
}

export default Cart;