import React, { useReducer } from 'react';
import CartContext from './cart-context'


const defaultCart = {
    item: [],
    totalAmount: 0
}

const CartReducer = (state, action) => {

    if (action.type === 'ADD') {
        const updatedItems = state.items.concat(action.item)
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCart
}
const CartProvider = (props) => {

    const [CartState, dispatchCart] = useReducer(CartReducer, defaultCart)

    const addCartItemHandler = (item) => {
        dispatchCart({ type: 'ADD', item: item })
    }
    const removeCartItemHandler = (id) => {
        dispatchCart({ type: 'REMOVE', id: id })
    }

    const cartContext = {
        items: CartState.items,
        totalAmount: CartState.totalAmount,
        onAddItem: addCartItemHandler,
        onRemoveItem: removeCartItemHandler
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;