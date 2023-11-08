import Account from './Etc/Account';
import Cart from './Etc/Cart';
import Favorite from './Etc/Favorite';
import Menu from './Etc/Menu';
import Search from './Etc/Search';
import styles from './Header.module.css';

const Header = () =>{
    return (
        <div className={styles.header}>

            <Menu />
            <Search />
            <Account />
            <Favorite />
            <Cart />
            
        </div>
    )
}

export default Header