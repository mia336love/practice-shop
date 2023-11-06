import styles from './Header.module.css';

const Header = () =>{
    return (
        <div className={styles.header}>
            <button className={styles.menuBtn}>
                <img src="./icons/menu.svg" alt="menu" />
            </button>
            
            <img className={styles.searchImg} src="./icons/search.svg" alt="search" />
            <input type="text" className={styles.searchInp} placeholder="Поиск"/>
            
            <button className={styles.accountBtn}>
                <img src="./icons/avatar.svg" alt="avatar" />
            </button>
            <button className={styles.favoritesBtn}>
                <img src="./icons/heart.svg" alt="heart" />
            </button>
            <button className={styles.cartBtn}>
                <img src="./icons/shopping-bag.svg" alt="shopping bag" />
            </button>

        </div>
    )
}

export default Header