// // // import React, { useState } from 'react';


// import defaultAva from '../../../Images/Header/avatar.svg'
// // // import cart from '../../../Images/Header/shopping-bag.svg'
// // // import heart from '../../../Images/Header/heart.svg'
// // // import eye from '../../../Images/Header/eye.svg'
// // // import account from '../../../Images/Header/account.svg'

// // // import './Account.css'; // Importing the CSS
// // // import styles from './Account.module.css'

// // // const Account = () => {
// // //   const [isModalOpen, setIsModalOpen] = useState(false);

// // //   const handleAccountButtonClick = () => {
// // //     setIsModalOpen(!isModalOpen);
// // //   };

// // //   const handleLoginClick = () => {
// // //     window.location.href = '/login';
// // //   };

// // //   const handleCartClick = () => {
// // //     console.log('click on cart');
// // //   };

// // //   const handleFavoritesClick = () => {
// // //     console.log('click on wishlist');
// // //   };

// // //   const handleHistoryClick = () => {
// // //     console.log('click on seen');
// // //   };



// // //   return (
// // //     <div>
// // //       <button onClick={handleAccountButtonClick}>
// // //         <img src={account} alt="" />
// // //       </button>
// // //       {isModalOpen && (
// // //         <div className="modal">
// // //             <img src={defaultAva} alt="Аватар" />
// // //             <button onClick={handleLoginClick}>
// // //                 {/* <img src={defaultAva} alt="" /> */}
// // //                 Войти
// // //             </button>
// // //             <button onClick={handleCartClick}>
// // //                 <img src={cart} alt="cart" />
// // //                 Корзина
// // //             </button>
// // //             <button onClick={handleFavoritesClick}>
// // //                 <img src={heart} alt="wishlist" />
// // //                 Избранное
// // //             </button>
// // //             <button onClick={handleHistoryClick}>
// // //                 <img src={eye} alt="seen" />
// // //                 Просмотренные
// // //             </button>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );

// // //     //   return (
// // //     //     {isModalOpen && user && ( 
// // //     //         <div className="modal">
// // //     //             <img src={defaultAva} alt="Аватар" />
// // //     //             <p>{user.email}</p>
// // //     //             <button onClick={handleLogout}>
// // //     //                 Выйти
// // //     //             </button>
// // //     //         </div>
// // //     //     )}
// // //     //     </div>
// // //     // );
    
// // // };

// // // export default Account;




// // // // // Account.jsx
// // // // // import React, { useState, useEffect } from 'react';

// // // // // // ...

// // // // // const Account = () => {
// // // // //   const [isModalOpen, setIsModalOpen] = useState(false);
// // // // //   const [user, setUser] = useState(null);

// // // // //   useEffect(() => {
// // // // //     const storedUser = JSON.parse(localStorage.getItem('user'));
// // // // //     setUser(storedUser);
// // // // //   }, []);

// // // // //   const handleLogout = () => {
// // // // //     localStorage.removeItem('user');
// // // // //     setUser(null);
// // // // //   };

// // // // //   const handleAccountButtonClick = () => {
// // // // //     setIsModalOpen(!isModalOpen);
// // // // //   };

// // // // //   const handleLoginClick = () => {
// // // // //     window.location.href = '/login';
// // // // //   };

// // // // //   const handleCartClick = () => {
// // // // //     console.log('click on cart');
// // // // //   };

// // // // //   const handleFavoritesClick = () => {
// // // // //     console.log('click on wishlist');
// // // // //   };

// // // // //   const handleHistoryClick = () => {
// // // // //     console.log('click on seen');
// // // // //   };

// // // // //   return (
// // // // //     // ...
// // // // //       {isModalOpen && user && ( // display only if user exists
// // // // //         <div className="modal">
// // // // //             <img src={defaultAva} alt="Аватар" />
// // // // //             <p>{user.email}</p> // display user email
// // // // //             <button onClick={handleLogout}> // logout button
// // // // //                 Выйти
// // // // //             </button>
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // };



// // // // import React, { useState } from 'react';

// // // // import defaultAva from '../../../Images/Header/avatar.svg';
// // // // import cart from '../../../Images/Header/shopping-bag.svg';
// // // // import heart from '../../../Images/Header/heart.svg';
// // // // import eye from '../../../Images/Header/eye.svg';
// // // // import account from '../../../Images/Header/account.svg';

// // // // import './Account.css'; // Importing the CSS
// // // // import styles from './Account.module.css';

// // // // const Account = () => {
// // // //     const [isModalOpen, setIsModalOpen] = useState(false);

// // // //     const handleAccountButtonClick = () => {
// // // //         setIsModalOpen(!isModalOpen);
// // // //     };

// // // //     const handleLoginClick = () => {
// // // //         window.location.href = '/login';
// // // //     };

// // // //     const handleCartClick = () => {
// // // //         console.log('click on cart');
// // // //     };

// // // //     const handleFavoritesClick = () => {
// // // //         console.log('click on wishlist');
// // // //     };

// // // //     const handleHistoryClick = () => {
// // // //         console.log('click on seen');
// // // //     };

// // // //     // Please note that I assume there is a `user` variable in your outer context. 
// // // //     // If not, you need to implement it. The same goes for `handleLogout`.
// // // //     return (
// // // //         <div>
// // // //             {isModalOpen && user && ( 
// // // //                 <div className="modal">
// // // //                     <img src={defaultAva} alt="Аватар" />
// // // //                     <p>{user.email}</p>
// // // //                     <button onClick={handleLogout}>
// // // //                         Выйти
// // // //                     </button>
// // // //                 </div>
// // // //             )}
// // // //         </div>
// // // //     );  
// // // // };

// // // // export default Account;


// // import React, { useState, useEffect } from 'react';

// // import defaultAva from '../../../Images/Header/avatar.svg'
// // import cart from '../../../Images/Header/shopping-bag.svg'
// // import heart from '../../../Images/Header/heart.svg'
// // import eye from '../../../Images/Header/eye.svg'
// // import accountImage from '../../../Images/Header/account.svg'

// // import './Account.css'; // Importing the CSS
// // import styles from './Account.module.css'

// // const Account = () => {
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   // State for logged in account
// //   const [account, setAccount] = useState({});

// //   useEffect(() => {
// //     const email = localStorage.getItem("email");
// //     if (email) {
// //       setAccount({ ...account, email });
// //     }
// //     // Here you would typically want to fetch account data for real applications
// //   }, []);

// //   const handleLogoutClick = () => {
// //     localStorage.removeItem("email");
// //     localStorage.removeItem("password");
// //     window.location.reload();
// //     // Here you would also typically handle real authentication process
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
// //     <div>
// //       <button onClick={handleAccountButtonClick}>
// //         <img src={accountImage} alt="" />
// //       </button>
// //       {isModalOpen && (
// //         <div className="modal">
// //             <img src={defaultAva} alt="Аватар" />
// //             <div>{account.email}</div>
// //             <button onClick={handleLogoutClick}>
// //                 Выйти
// //             </button>
// //             {/* ... */}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Account;


// // import React, { useState, useEffect } from 'react';

// // import defaultAva from '../../../Images/Header/avatar.svg'
// // import cart from '../../../Images/Header/shopping-bag.svg'
// // import heart from '../../../Images/Header/heart.svg'
// // import eye from '../../../Images/Header/eye.svg'
// // import accountImage from '../../../Images/Header/account.svg'

// // import './Account.css'; // Importing the CSS
// // import styles from './Account.module.css'

// // const Account = () => {
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   // State for logged in account
// //   const [account, setAccount] = useState({});

// //   useEffect(() => {
// //     const email = localStorage.getItem("email");
// //     if (email) {
// //       setAccount({ ...account, email });
// //     }
// //   }, []);

// //   const handleLogoutClick = () => {
// //     localStorage.removeItem("email");
// //     localStorage.removeItem("password");
// //     window.location.reload();
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
// //     <div>
// //       <button onClick={handleAccountButtonClick}>
// //         <img src={accountImage} alt="" />
// //       </button>
// //       {isModalOpen && (
// //         <div className="modal">
// //           {account.email ? (
// //             <div>
// //               <img src={defaultAva} alt="Аватар" />
// //               <div>{account.email}</div>
// //               <button onClick={handleLogoutClick}>
// //                 Выйти
// //               </button>
// //             </div>
// //           ) : (
// //             <div>
// //               <button onClick={handleLoginClick}>
// //                 Войти
// //               </button>
// //             </div>
// //           )}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Account;

// import React, { useState, useEffect } from 'react';


// const Account = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const [account, setAccount] = useState({
//     email: localStorage.getItem("email") || ""
//   });

//   useEffect(() => {
//     const handleStorageChange = () => {
//       const email = localStorage.getItem("email");
//       setAccount({ email: email || "" });
//     };

//     window.addEventListener('storage', handleStorageChange);
    
//     return () => {
//       window.removeEventListener('storage', handleStorageChange);
//     };
//   }, []);

//   const handleLogoutClick = () => {
//     localStorage.removeItem("email");
//     localStorage.removeItem("password");
//     window.location.reload();
//   };
  
//   const handleAccountButtonClick = () => {
//         setIsModalOpen(!isModalOpen);
//       };
    
//       const handleLoginClick = () => {
//         window.location.href = '/login';
//       };
    
//       const handleCartClick = () => {
//         console.log('click on cart');
//       };
    
//       const handleFavoritesClick = () => {
//         console.log('click on wishlist');
//       };
    
//       const handleHistoryClick = () => {
//         console.log('click on seen');
//       };

//   return (
//     <div>
//       // ... existing JSX
//       {isModalOpen && (
//         <div className="modal">
//           {account.email ? (
//             <div>
//               <img src={defaultAva} alt="Аватар" />
//               <div>{account.email}</div>
//               <button onClick={handleLogoutClick}>
//                 Выйти
//               </button>
//             </div>
//           ) : (
//             <div>
//               <button onClick={handleLoginClick}>
//                 Войти
//               </button>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Account;

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
            <img className='defaultAva' src={defaultAva} alt="Аватар" />
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

