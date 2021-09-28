import React from 'react';
import { useState, useEffect } from 'react';
import Cart from '../Cart/Cart';
import Prime from '../Prime/Prime';
import './Section.css';


const Section = () => {
    const [primes, setPrime] = useState([]);
    const [cart, setCart]= useState([]);

    useEffect(() => {
        fetch('./tools.JSON')
        .then(res => res.json())
        .then(data => setPrime(data));    
    }, []);

    const handleAddToCart = (prime) => {
        const newCart = [...cart, prime];
        setCart(newCart);
    }

    return (
        <div className="section-container">
            <div className="card-container">
                
                {
                primes.map(prime =><Prime key={prime.key} prime={prime} handleAddToCart={handleAddToCart}> </Prime>)
                }
                
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

            
        </div>
    );
};
//<h3>product:{primes.length}</h3>
export default Section;