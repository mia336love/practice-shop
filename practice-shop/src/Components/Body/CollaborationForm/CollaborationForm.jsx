// import React from 'react';

// const CollaborationForm = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default CollaborationForm;

// import "../Style/Css/WelcomeToJoin.css"
import React, { useState } from 'react';
import styles from './CollaborationForm.module.css'
import collabBtn from '../../../Images/CollaborationForm/collab-btn.png'
import arrow from '../../../Images/CollaborationForm/arrow.svg'


const CollaborationForm = () => {
    return (
        <div className={styles.CollaborationForm}>
            <form className={styles.joinForm}>
                {/* <div className={styles.formContent}></div> */}
                <div className={styles.textContainer}>
                    <p className={styles.joinLabel}>Приглашаем  к сотрудничеству производителей и поставщиков одежды, обуви и аксессуаров</p>
                </div>
                <div className={styles.joinInputs}>
                    <input type="text" placeholder="Ваше имя" />
                    <input type="text" placeholder="Номер телефона" />
                    <input type="text" placeholder="Электронная почта" />
                </div>
                
                <div className={styles.agreement}>
                    <input className={styles.joinCheckbox} type="checkbox" />
                    <p className="check-text">Даю согласие на обработку персональных данных</p>
                </div>

                <button className={styles.collabBtn}>
                    {/* <img src={collabBtn} alt="" /> */}
                    Отправить
                    <img src={arrow} alt="" />
                </button>

            </form>

        </div>
    )
}

export default CollaborationForm