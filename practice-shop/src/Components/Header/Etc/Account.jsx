import React from 'react';
import styles from '../Header.module.css'

const Account = () => {
    return (
        <div>
            <button className={styles.accountBtn}>
                <img src="./icons/avatar.svg" alt="avatar" />
            </button>
        </div>
    );
};

export default Account;