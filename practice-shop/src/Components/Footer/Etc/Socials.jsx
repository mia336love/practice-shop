import React from 'react';
import styles from '../Footer.module.css'

import phone from '../../../Images/Footer/phone.svg'
import socials from '../../../Images/Footer/socials.svg'
import clock from '../../../Images/Footer/clock.svg'


const Socials = () => {
    return (
        <div>
            <div className={styles.footSocial}>
                    <p className={styles.footLabel}>Соц. сети</p>
                    <img src={socials} alt="socials" />
                    <li>
                        <img className={styles.imgPhone} src={phone} alt='phone'/>
                        <p>+375255990755</p>
                    </li>
                    <li>
                        <img className={styles.imgClock} src={clock} alt='clock'/>
                        <p>круглосуточно, без выходных</p>
                    </li>
                </div>
        </div>
    );
};

export default Socials;