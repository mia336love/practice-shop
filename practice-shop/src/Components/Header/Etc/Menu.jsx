import React from 'react';
import styles from '../Header.module.css'

const Menu = () => {
    return (
        <div>
            <button className={styles.menuBtn}>
                <img src="./icons/menu.svg" alt="menu" />
            </button>
        </div>
    );
};

export default Menu;