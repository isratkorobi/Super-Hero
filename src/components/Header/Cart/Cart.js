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
            <div className="card">
                <div className="card-body">
                <h5 className="card-title">Total Country:  {props.cart.length}</h5>
                 <p className="card-text">Name: </p>
                 <p className="card-text">Total Salary: {total}</p>
                 <button href="#" className="btn btn-secondary"><span><i className="fas fa-user"></i></span> Added Minister</button>
  </div>
</div>
        </div>

    );
};
/* added cart content */
export default Cart;