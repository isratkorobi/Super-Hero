import React from 'react';
import '../Prime/Prime';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;

    let total = 0;
    for (const prime of cart){
    total = total + prime.salary};  
    return (
        <div>
            <h2>total states:{props.cart.length}</h2>
            <br/>
            <h1>Name:</h1>
            <br/>
            <p>Total: {total}</p>
        </div>

    );
};
export default Cart;