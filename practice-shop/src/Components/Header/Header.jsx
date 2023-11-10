import Account from './Etc/Account.jsx';
import styles from './Header.module.css';

import React, { useState } from 'react';

import Cart from './Etc/Cart';
import Favorite from './Etc/Favorite';
import Menu from './Etc/Menu';
import Search from './Etc/Search';


const Header = () =>{
    return (
        <div className={styles.header}>

            <Menu />
            <div className={styles.rightHead}>
                <Search />
                    <div className={styles.buttons}>
                        <Account />
                        <Favorite />
                        <Cart />
                    </div>
                
            </div>
            
        </div>
    )
}

export default Header;
