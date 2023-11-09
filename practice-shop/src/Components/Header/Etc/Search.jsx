import React from 'react';
import styles from '../Header.module.css'

const Search = () => {
    return (
        <div className={styles.search}>
            <div>
                <img className={styles.searchImg} src="./icons/search.svg" alt="search" />
            </div>
            <div>
                <input type="text" className={styles.searchInp} placeholder="Поиск"/>
            </div>
        </div>
    );
};

export default Search;