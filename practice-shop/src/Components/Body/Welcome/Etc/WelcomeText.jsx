import React, { Component } from 'react';
import styles from '../Welcome.module.css'

class WelcomeText extends Component {
    render() {
        return (
            <div className={styles.welcomeText}>
                <div className={styles.left}>
                    <img className={styles.imgShirt} src="./images/shirt.jpg" alt="shirt" />
                    <h1 className={styles.welcomeTitle}>Добро пожаловать в <span className={styles.cokteil}>Cokteil</span></h1>
                    <p className={styles.smallText}>Экономим Ваше время! <br />Предлагаем лучшие цены! <br />Доставляем в кратчайшие сроки!</p>
                </div>
                
                <div className={styles.right}>
                    <img className={styles.imgJeans} src="./images/jeans.jpg" alt="shirt" />
                </div>
            </div>
        );
    }
}

export default WelcomeText;