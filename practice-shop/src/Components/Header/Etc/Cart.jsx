import React from 'react';
import styles from '../Header.module.css'
import cart from '../../../Images/Header/shopping-bag.svg'


const Cart = () => {
    return (
        <div>
            <button className={styles.cartBtn}>
                <img src={cart} alt="shopping bag" />
            </button>
        </div>
    );
};

export default Cart;