import React from 'react';
import styles from '../Header.module.css'

import heart from '../../../Images/Header/heart.svg'


const Favorite = () => {
    return (
        <div>
            <button className={styles.favoritesBtn}>
                <img src={heart} alt="heart" />
            </button>
        </div>
    );
};

export default Favorite;