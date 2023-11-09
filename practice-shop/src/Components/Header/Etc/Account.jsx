import React, { useState } from 'react';
import styles from '../Header.module.css'

import defaultAva from '../../../Images/Header/avatar.svg'

const Account = () => {

    let userName = ''
    let userAva = defaultAva

    const [getModal, setModal] = useState(null)


    return (
        <div>
            <button className={styles.accountBtn}>
                <img src="./icons/avatar.svg" alt="avatar" />
            </button>
        </div>
    );
};

export default Account;