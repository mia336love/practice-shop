import styles from '../WhyWe/WhyWe.module.css';

// import img1 from '../../../products/1.jpg'
import smallEll1 from '../../../../src/Images/whyWe/small ellipse.svg'
import smallEll2 from '../../../../src/Images/whyWe/small ellipse.svg'
import bigEll1 from '../../../../src/Images/whyWe/big ellipse.svg'
import bigEll2 from '../../../../src/Images/whyWe/big ellipse.svg'


import chat from '../../../Images/whyWe/buttons/btn-chat.svg'
import chatHover from '../../../Images/whyWe/buttons/btn-chat-hover.svg'
import top from '../../../Images/whyWe/buttons/btn-top.svg'





const WhyWe = () => {
    return (
        <div className={styles.whyWe}>

            <p className={styles.whyWeText}>Почему выбирают нас?</p>
            <div className={styles.mainContent}>
                <div className={styles.firstLine}>
                    <p className={styles.discounts}>Скидки постоянным клиентам от 5%</p>
                    <p className={styles.prices}>Предлагаем самые выгодные цены</p>
                    <p className={styles.customers}>Наши покупатели всегда остаются довольны</p>
                    <p className={styles.assortment}>Ширикий ассортимент товаров для всей семьи</p>
                </div>
                
                <div className={styles.secondLine}>
                    <p className={styles.delivery}>Возможность доставки в любой город Беларуси </p>
                    <p className={styles.points}>Пункты выдачи заказов рядом с домом</p>
                </div>
                
{/* 
                <img className={styles.smallEll1} src={smallEll1} alt="small ellipse" />
                <img className={styles.smallEll2} src={smallEll2} alt="small ellipse" />
                <img className={styles.bigEll2} src={bigEll2} alt="big ellipse" />
                <img className={styles.bigEll2} src={bigEll2} alt="big ellipse" /> */}

                <div className={styles.buttons}>
                    <div className={styles.btnTopDiv}>
                        <button>
                            <img className={styles.btnTop} src={top} alt="" />
                        </button>
                    </div>
                    <div className={styles.btnChatDiv}>
                        <button>
                            <img className={styles.btnChat} src={chat} alt="" />
                        </button>
                    </div>
                </div>
            </div>
            


        </div>
    )
}

export default WhyWe

// насчет авторизации. юзать локалку (как в пиццерии по факту). true -- отрисовывать фулл меню кабинета, false -- тот, что с кнопкой войти и пр