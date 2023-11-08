import React from 'react';
import styles from './Collaboration.module.css'

import cog from '../../../Images/Collaboration/cog.svg'
import list from '../../../Images/Collaboration/list.svg'
import employee from '../../../Images/Collaboration/employee-group.svg'
import coins from '../../../Images/Collaboration/coin-bug.svg'

const Collaboration = () => {
    return (
        <div className={styles.collaboration}>
            <p className={styles.collaborationLabel}>Сотрудничество с нами</p>
            <p className={styles.ourCompany}>Наша компания постоянно растёт и расширяет рынок, поэтому мы заинтересованы в новых партнёрах и рассматриваем новые проекты, которые могут <br />быть привлекательны и интересны с коммерческой точки зрения. </p>
            
            <div className={styles.blocks}>
                <div className={styles.block1}>
                    <label>Становитесь <br />партнёром</label>
                    <p>Регистрируйтесь <br />и переходите в свой кабинет</p>
                </div>
                <div className={styles.block2}>
                    <label>Рекламируйте <br />товары</label>
                    <p>Рекламируйте наши товары <br />на форумах, сайтах, в социальных сетях</p>
                </div>
                <div className={styles.block3}>
                    <label>Приводите <br />покупателей</label>
                    <p>Приводите покупателей на <br />наш сайт по уникальной ссылке</p>
                </div>
                <div className={styles.block4}>
                    <label>Получайте <br />бонусы</label>
                    <p>Копите бонусы от каждого <br />оплаченного заказа</p>
                </div>
            </div>

            <div className={styles.benefits}>
                    <label>Это выгодно. Какие преимущества?</label>

                    <div className={styles.benBlocks}>
                        <div className={styles.block1}>
                            <img src={cog} alt="" />
                            <p>Автоматизация процессов</p>
                        </div>
                        <div className={styles.block2}>
                            <img src={list} alt="" />
                            <p>Автоматизация процессов</p>
                        </div>
                        <div className={styles.block3}>
                            <img src={employee} alt="" />
                            <p>Автоматизация процессов</p>
                        </div>
                        <div className={styles.block4}>
                            <img src={coins} alt="" />
                            <p>Автоматизация процессов</p>
                        </div>
                    </div>
                </div>
            
        </div>
    );
};

export default Collaboration;