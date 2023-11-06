import styles from './Footer.module.css';

const Footer = () =>{
    return (
        <div className={styles.footer}>
            {/* <footer> */}
                {/* // разбить на компоненты */}
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
                
                <ul className={styles.footMyAccount}>
                    <p className={styles.footLabel}>Мой кабинет</p>
                    <li><a href="">Мои заказы</a></li>
                    <li><a href="">Мои адреса</a></li>
                    <li><a href="">Мои скидки</a></li>
                    <li><a href="">Моя информация</a></li>
                </ul>

          
                <div className={styles.footContact}>
                    <p className={styles.footLabel}>Контактная информация</p>
                    <p className={styles.ip}>ИП Вишневский Иван Сергеевич <br />
                    государственная регистрация №690867884 от 31.07.2020. <br />
                    Логойским горисполкомом <br />
                    Защита прав потребителей +375259990755</p>
                </div>

                <div className={styles.footSocial}>
                    <p className={styles.footLabel}>Соц. сети</p>
                    <img src=".footer/socials.svg" alt="socials" />
                    <li>
                        <img className={styles.imgPhone} src='./footer/phone.svg' alt='phone'/>
                        <p>+375255990755</p>
                    </li>
                    <li>
                        <img className={styles.imgClock} src='./footer/clock.svg' alt='clock'/>
                        <p>круглосуточно, без выходных</p>
                    </li>
                </div>
                <img className={styles.logoNeon} src="./images/logo-neon-2.png" alt="logo neon" />

                
            {/* </footer> */}
        </div>
    )
}

export default Footer 