import React, { Component } from 'react';
import styles from '../Welcome.module.css'

class WelcomeText extends Component {
    render() {
        return (
            <div>
                <img className={styles.imgShirt} src="./images/shirt.jpg" alt="shirt" />
                <p className={styles.welcomeText}>Добро пожаловать в <span className={styles.cokteil}>Cokteil</span></p>
                <p className={styles.smallText}>Экономим Ваше время! <br />Предлагаем лучшие цены! <br />Доставляем в кратчайшие сроки!</p>

                <img className={styles.imgJeans} src="./images/jeans.jpg" alt="shirt" />
            </div>
        );
    }
}

export default WelcomeText;