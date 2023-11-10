import React, { useState } from 'react';


import defaultAva from '../../../Images/Header/avatar.svg'
import cart from '../../../Images/Header/shopping-bag.svg'
import heart from '../../../Images/Header/heart.svg'
import eye from '../../../Images/Header/eye.svg'
import account from '../../../Images/Header/account.svg'

import './Account.css'; // Importing the CSS
import styles from './Account.module.css'

const Account = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAccountButtonClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleLoginClick = () => {
    window.location.href = '/login';
  };

  const handleCartClick = () => {
    console.log('click on cart');
  };

  const handleFavoritesClick = () => {
    console.log('click on wishlist');
  };

  const handleHistoryClick = () => {
    console.log('click on seen');
  };

//   return (
//     {isModalOpen && user && ( 
//         <div className="modal">
//             <img src={defaultAva} alt="Аватар" />
//             <p>{user.email}</p>
//             <button onClick={handleLogout}>
//                 Выйти
//             </button>
//         </div>
//     )}
//     </div>
// );

  return (
    <div>
      <button onClick={handleAccountButtonClick}>
        <img src={account} alt="" />
      </button>
      {isModalOpen && (
        <div className="modal">
            <img src={defaultAva} alt="Аватар" />
            <button onClick={handleLoginClick}>
                {/* <img src={defaultAva} alt="" /> */}
                Войти
            </button>
            <button onClick={handleCartClick}>
                <img src={cart} alt="cart" />
                Корзина
            </button>
            <button onClick={handleFavoritesClick}>
                <img src={heart} alt="wishlist" />
                Избранное
            </button>
            <button onClick={handleHistoryClick}>
                <img src={eye} alt="seen" />
                Просмотренные
            </button>
        </div>
      )}
    </div>
  );
    
};

export default Account;




// // Account.jsx
// // import React, { useState, useEffect } from 'react';

// // // ...

// // const Account = () => {
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [user, setUser] = useState(null);

// //   useEffect(() => {
// //     const storedUser = JSON.parse(localStorage.getItem('user'));
// //     setUser(storedUser);
// //   }, []);

// //   const handleLogout = () => {
// //     localStorage.removeItem('user');
// //     setUser(null);
// //   };

// //   const handleAccountButtonClick = () => {
// //     setIsModalOpen(!isModalOpen);
// //   };

// //   const handleLoginClick = () => {
// //     window.location.href = '/login';
// //   };

// //   const handleCartClick = () => {
// //     console.log('click on cart');
// //   };

// //   const handleFavoritesClick = () => {
// //     console.log('click on wishlist');
// //   };

// //   const handleHistoryClick = () => {
// //     console.log('click on seen');
// //   };

// //   return (
// //     // ...
// //       {isModalOpen && user && ( // display only if user exists
// //         <div className="modal">
// //             <img src={defaultAva} alt="Аватар" />
// //             <p>{user.email}</p> // display user email
// //             <button onClick={handleLogout}> // logout button
// //                 Выйти
// //             </button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };



// import React, { useState } from 'react';

// import defaultAva from '../../../Images/Header/avatar.svg';
// import cart from '../../../Images/Header/shopping-bag.svg';
// import heart from '../../../Images/Header/heart.svg';
// import eye from '../../../Images/Header/eye.svg';
// import account from '../../../Images/Header/account.svg';

// import './Account.css'; // Importing the CSS
// import styles from './Account.module.css';

// const Account = () => {
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const handleAccountButtonClick = () => {
//         setIsModalOpen(!isModalOpen);
//     };

//     const handleLoginClick = () => {
//         window.location.href = '/login';
//     };

//     const handleCartClick = () => {
//         console.log('click on cart');
//     };

//     const handleFavoritesClick = () => {
//         console.log('click on wishlist');
//     };

//     const handleHistoryClick = () => {
//         console.log('click on seen');
//     };

//     // Please note that I assume there is a `user` variable in your outer context. 
//     // If not, you need to implement it. The same goes for `handleLogout`.
//     return (
//         <div>
//             {isModalOpen && user && ( 
//                 <div className="modal">
//                     <img src={defaultAva} alt="Аватар" />
//                     <p>{user.email}</p>
//                     <button onClick={handleLogout}>
//                         Выйти
//                     </button>
//                 </div>
//             )}
//         </div>
//     );  
// };

// export default Account;
