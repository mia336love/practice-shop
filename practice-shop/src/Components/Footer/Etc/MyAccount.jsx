import React, { Component } from 'react';
import styles from '../Footer.module.css'

// class MyAccount extends Component {
//     render() {
//         return (
//             <div>
//                 <ul className={styles.footMyAccount}>
//                     <p className={styles.footLabel}>Мой кабинет</p>
//                     <li><a href="">Мои заказы</a></li>
//                     <li><a href="">Мои адреса</a></li>
//                     <li><a href="">Мои скидки</a></li>
//                     <li><a href="">Моя информация</a></li>
//                 </ul>
//             </div>
//         );
//     }
// }

const MyAccount = () => {
    return (
        <div>
            <ul className={styles.footMyAccount}>
                <p className={styles.footLabel}>Мой кабинет</p>
                <li><a href="">Мои заказы</a></li>
                <li><a href="">Мои адреса</a></li>
                <li><a href="">Мои скидки</a></li>
                <li><a href="">Моя информация</a></li>
            </ul>
        </div>
    );
}


export default MyAccount;