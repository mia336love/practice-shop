import React from 'react';
import styles from '../Footer.module.css'

const Info = () => {
    return (
        <div>
            <ul className={styles.footInfo}>
                    <p className={styles.footLabel}>Информация</p>
                    {/* <li><NavLink to='/'>Главная</NavLink></li>
                    <li><NavLink to='/promotions'>Акции</NavLink></li>
                    <li><NavLink to='/catalog'>Каталог</NavLink></li> */}

                    <li><a href="">Главная</a></li>
                    <li><a href="">Акции</a></li>
                    <li><a href="">Каталог</a></li>
                    <li><a href="">Возврат</a></li>
                    <li><a href="">Доставка</a></li>
                    <li><a href="">Партнёрам</a></li>
                    <li><a href="">Способы оплаты</a></li>
                    <li><a href="">Как сделать заказ?</a></li>

                </ul>
        </div>
    );
};

export default Info;