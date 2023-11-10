import React from 'react';
import styles from '../Header.module.css'

import search from '../../../Images/Header/search.svg'

const Search = () => {
    return (
        <div className={styles.search}>
            <div>
                <img className={styles.searchImg} src={search} alt="search" />
            </div>
            <div>
                <input type="text" className={styles.searchInp} placeholder="Поиск"/>
            </div>
        </div>
    );
};

export default Search;