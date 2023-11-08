import React from 'react';
import styles from '../Header.module.css'

const Favorite = () => {
    return (
        <div>
            <button className={styles.favoritesBtn}>
                <img src="./icons/heart.svg" alt="heart" />
            </button>
        </div>
    );
};

export default Favorite;