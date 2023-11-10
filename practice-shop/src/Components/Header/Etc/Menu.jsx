import React, { useState } from 'react';
import styles from '../Header.module.css'

import menu from '../../../Images/Header/menu.svg'
// import logo from '../../../Images/Header/logo.svg'

const Menu = () => {
    return (
        <button className={styles.menutBtn}>
                <img src={menu} alt="avatar" />
            </button>
    )
}
export default Menu;


// const Menu = () => {

//     const mainTags = [
//         {
//             id: 0,
//             tag: "Женщинам"         
//         },
//         {
//             id: 1,
//             tag: "Мужчинам"         
//         },
//         {
//             id: 2,
//             tag: "Детям"         
//         },
//         {
//             id: 3,
//             tag: "Обувь"         
//         },
//         {
//             id: 4,
//             tag: "Игрушки"         
//         },
//         {
//             id: 5,
//             tag: "Аксессуары"         
//         },
//         {
//             id: 6,
//             tag: "Большие размеры"         
//         },
//         {
//             id: 7,
//             tag: "Дополнительно"         
//         },
//         {
//             id: 8,
//             tag: "Акции"         
//         },
//     ]

//     const deepTags = [
//         {
//             id: 0,
//             tag: 'Майки'
//         },
//         {
//             id: 1,
//             tag: 'Костюмы'
//         },
//         {
//             id: 2,
//             tag: 'Брюки'
//         },
//         {
//             id: 3,
//             tag: 'Джинсы'
//         },
//         {
//             id: 4,
//             tag: 'Юбки'
//         },
//         {
//             id: 5,
//             tag: 'Шорты'
//         },
//         {
//             id: 6,
//             tag: 'Свитшоты, худи'
//         },
//         {
//             id: 7,
//             tag: 'Блузки и рубашки'
//         },
//         {
//             id: 8,
//             tag: 'Пиджаки и жакеты'
//         },
//         {
//             id: 9,
//             tag: 'Платья и сарафаны'
//         },
//         {
//             id: 10,
//             tag: 'Верхняя одежда'
//         }
//     ]

//     const [moreTags, setTag] = useState(deepTags)

//     const [activeTag, setActiveTag] = useState(null)

//     const [showTag, setTags] = useState(null)


//     return (
//         <div>
//             <button className={styles.menuBtn} onClick={showTag === null ? () => {setTags(true)} : () => {setTags(null)}}>
//                 <img src={menu} alt="menu" />
//             </button>

//             <div className={styles.TagHeader} style={showTag !== null ? {display: 'block'} : {display: 'none'}}>
//                 <img className={styles.logo} src={logo} alt="" />
//                 <div className={styles.conteiner}>
//                     {
//                         deepTags.map(el => (
//                             <p key={el.id} onClick={
//                                 () => {
//                                     setActiveTag(el.id)
//                                     if (el.tag === 'Женщинам') {
//                                         setTag(deepTags)
//                                     }
//                                     if (el.tag === 'Мужчинам') {
//                                         setTag(
//                                             [
//                                                 {
//                                                     id: 0,
//                                                     text: 'Майки'
//                                                 },
//                                                 {
//                                                     id: 1,
//                                                     text: 'Костюмы'
//                                                 },
//                                                 {
//                                                     id: 2,
//                                                     text: 'Брюки'
//                                                 },
//                                                 {
//                                                     id: 3,
//                                                     text: 'Джинсы'
//                                                 },
//                                                 {
//                                                     id: 4,
//                                                     text: 'Шорты'
//                                                 },
//                                                 {
//                                                     id: 5,
//                                                     text: 'Свитшоты, худи'
//                                                 },
//                                                 {
//                                                     id: 6,
//                                                     text: 'Рубашки'
//                                                 },
//                                                 {
//                                                     id: 7,
//                                                     text: 'Пиджаки и жакеты'
//                                                 },
//                                                 {
//                                                     id: 8,
//                                                     text: 'Верхняя одежда'
//                                                 }
//                                             ]
//                                         )
//                                     } else {
//                                         setTag(deepTags)
//                                     }
//                                 }
//                             } style={activeTag === el.id ? {fontSize: '1.5em'} : {fontSize: '1em'}} className={styles.tagText}>{el.tag}</p>
//                         ))
//                     }
//                 </div>
                
//                 <div className={styles.mainTa}></div>
//             </div>

//         </div>
//     );
// };

// export default Menu;

