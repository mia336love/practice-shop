import styles from './Welcome.module.css';


import CatalogBtn from './Etc/CatalogBtn';
import WelcomeText from './Etc/WelcomeText';

const Welcome = () =>{
    return (
        <div className={styles.welcome}>
            <WelcomeText />
            <CatalogBtn />
        </div>
    )
}

export default Welcome