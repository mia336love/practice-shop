import Contact from './Etc/Contact';
import Info from './Etc/Info';
import MyAccount from './Etc/MyAccount';
import Socials from './Etc/Socials';
import styles from './Footer.module.css';

const Footer = () =>{
    return (
        <div className={styles.footer}>
            {/* <footer> */}

                <Info />
                <MyAccount />
                <Contact />
                <Socials />

                 
                <img className={styles.logoNeon} src="./images/logo-neon-2.png" alt="logo neon" />

                
            {/* </footer> */}
        </div>
    )
}

export default Footer 