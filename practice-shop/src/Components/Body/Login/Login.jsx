// import React from 'react';
// import styles from './Login.module.css'

// import closeBtn from '../../../Images/Login/close.svg'

// const Login = () => {
//     return (
//         <div>
//             <div className={styles.auth}>
//                 <h1>Вход в личный кабинет</h1>
//                 <input type="text" placeholder='Электронная почта'/>
//                 <input type="password" placeholder='Пароль'/>
//                 <a href="">Не помню пароль</a>
//                 <div className={styles.btns}>
//                     <button className={styles.loginBtn}>Войти в кабинет</button>
//                     <button className={styles.registerBtn}>Регистрация</button>
//                 </div>
//             </div>
//             <div className={styles.rightContent}>
//                 <button className={styles.closeLogin}>
//                     <img src={closeBtn} alt="" />
//                 </button>
//             </div>
            
//         </div>
//     );
// };

// export default Login;

// Login.jsx
import React, { useState } from 'react';
import styles from './Login.module.css'

import closeBtn from '../../../Images/Login/close.svg'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        localStorage.setItem('user', JSON.stringify({email, password}));
    };

    return (
        <div>
            <div className={styles.auth}>
                <h1>Вход в личный кабинет</h1>
                <input type="text" placeholder='Электронная почта' value={email} onChange={event => setEmail(event.target.value)}/>
                <input type="password" placeholder='Пароль' value={password} onChange={event => setPassword(event.target.value)}/>
                <a href="">Не помню пароль</a>
                <div className={styles.btns}>
                <button className={styles.loginBtn} onClick={handleLogin}>Войти в кабинет</button>
                    <button className={styles.registerBtn}>Регистрация</button>
                </div>
            </div>
            <div className={styles.rightContent}>
                <button className={styles.closeLogin}>
                    <img src={closeBtn} alt="" />
                </button>
            </div>
        
        </div>
    );
};

export default Login;