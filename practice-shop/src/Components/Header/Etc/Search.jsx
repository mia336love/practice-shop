import React from 'react';
import styles from '../Header.module.css'

const Search = () => {
    return (
        <div>
            <img className={styles.searchImg} src="./icons/search.svg" alt="search" />
            <input type="text" className={styles.searchInp} placeholder="Поиск"/>
        </div>
    );
};

export default Search;