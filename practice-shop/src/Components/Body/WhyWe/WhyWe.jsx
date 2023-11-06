import styles from '../WhyWe/WhyWe.module.css';

// import img1 from '../../../products/1.jpg'
import smallEll from '../../../../src/Images/whyWe/small ellipse.svg'

const WhyWe = () => {
    return (
        <div className={styles.whyWe}>

            <p className={styles.whyWeText}>Почему выбирают нас?</p>

            <p className={styles.discounts}>Скидки постоянным клиентам от 5%</p>
            <p className={styles.delivery}>Возможность доставки в любой город Беларуси </p>
            <p className={styles.prices}>Предлагаем самые выгодные цены</p>
            <p className={styles.customers}>Наши покупатели всегда остаются довольны</p>
            <p className={styles.points}>Пункты выдачи заказов рядом с домом</p>
            <p className={styles.assortment}>Ширикий ассортимент товаров для всей семьи</p>

            <img src={smallEll} alt="small ellipse" />

        </div>
    )
}

export default WhyWe

// насчет авторизации. юзать локалку (как в пиццерии по факту). true -- отрисовывать фулл меню кабинета, false -- тот, что с кнопкой войти и пр