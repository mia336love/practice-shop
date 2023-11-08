import React from 'react';
import styles from '../Header.module.css'

const Cart = () => {
    return (
        <div>
            <button className={styles.cartBtn}>
                <img src="./icons/shopping-bag.svg" alt="shopping bag" />
            </button>
        </div>
    );
};

export default Cart;