// import React, { useState } from 'react';
// import styles from './FAQ.module.css';
// import plus from '../../../Images/FAQ/plus.svg'
// const Faq = () => {

    // const faq = [
    //     {
    //         question: 'Как сделать заказ?',
    //         id: 0,
    //         answer: 'Got ya now, Kiryu-chan!'
    //     },
    //     {
    //         question: 'Способы оплаты',
    //         id: 1,
    //         answer: 'Got ya now, Kiryu-chan!'
    //     },
    //     {
    //         question: 'Доставка',
    //         id: 2,
    //         answer: 'Got ya now, Kiryu-chan!'
    //     },
    //     {
    //         question: 'Сроки доставки',
    //         id: 3,
    //         answer: 'Got ya now, Kiryu-chan!'
    //     },
    //     {
    //         question: 'Как сделать обмен?',
    //         id: 4,
    //         answer: 'Got ya now, Kiryu-chan!'
    //     },
    //     {
    //         question: 'Как сделать возврат?',
    //         id: 5,
    //         answer: 'Got ya now, Kiryu-chan!'
    //     },
    //     {
    //         question: 'Куда и когда вернутся деньги за возвращённый товар?',
    //         id: 6,
    //         answer: 'Got ya now, Kiryu-chan!'
    //     }
    // ]

//     const [openFAQ, setOpenFaqFAQ] = useState(null)

//     return (
//         <div className={styles.faq}>
//             <div className={styles.faqLabel}>
//                 <h1 className={styles.labelText}>Часто задаваемые вопросы <span className={styles.faqText}>FAQ</span></h1>
//             </div>
//             <div className={styles.faqBody}>
//                 {
//                     faq.map(el => (
//                         <div onClick={
//                             openFAQ === el.id ? () => setOpenFaqFAQ(null) : setOpenFaqFAQ(el.id)
//                         } key={el.id} className={styles.questions}>
//                             <div className={styles.questionCard}>
//                                 <p className={styles.question}>{el.question}</p>
//                                 <img className={styles.plus} src={plus} alt="open question" style={openFAQ === el.id ? {rotate: '45deg'} : {rotate: '0deg'}}/>   
//                             </div>
//                             <p className={styles.openedFaq} style={openFAQ === el.id ? {display: 'block'} : {display: 'none'}}>{el.answer}</p>
//                         </div>
//                     ))
//                 }
//             </div>
//         </div>
//     );

// }
 
// export default Faq;

import plus from '../../../Images/FAQ/plus.svg'
import styles from './Faq.module.css';
import { useState } from "react"

const Faq = () => {

    const faq = [
        {
            question: "Как сделать заказ?",
            id: 0,
            answer: 'Чтобы сделать заказ пользователь переходит в каталог сайта, выбирает нужный товар, отпраляет его в коризину, выбрав нужный размер и цвет, и нажимает кнопку “заказать”. Выбирает способ оплаты и доставки и покупает товар. '
        },
        {
            question: "Способы оплаты",
            id: 1,
            answer: 'Got ya now, Kiryu-chan!'
        },
        {
            question: "Доставка",
            id: 2,
            answer: 'Got ya now, Kiryu-chan!'
        },
        {
            question: "Сроки доставки",
            id: 3,
            answer: 'Got ya now, Kiryu-chan!'
        },
        {
            question: "Как сделать обмен?",
            id: 4,
            answer: 'Got ya now, Kiryu-chan!'
        },
        {
            question: "Как сделать возврат?",
            id: 5,
            answer: 'Got ya now, Kiryu-chan!'
        },
        {
            question: "Куда и когда вернутся деньги за возвращённый товар?",
            id: 6,
            answer: 'Got ya now, Kiryu-chan!'
        }
    ]

    const [openFaq, setOpenFaq] = useState(null)



    return (
        <div className={styles.faq}>
            <div className={styles.faqLabel}>
                <p className={styles.labelText}>Часто задаваемые вопросы</p>
                <p className={styles.faqText}>FAQ</p>
            </div>

            <div className={styles.faqBody}>
                {
                    faq.map(el => (
                        <div className={styles.questions} onClick={
                            openFaq === el.id ? () => setOpenFaq(null) : () => setOpenFaq(el.id)
                            } key={el.id}>
                            <div className={styles.questionBlock}>
                                <p className={styles.question}>{el.question}</p>
                                <img className={styles.plus} src={plus} alt="" style={openFaq === el.id ? {rotate: '45deg'} : {rotate: '0deg'}}/>
                            </div>
                            <p className={styles.openedFaq} style={openFaq === el.id ? {display: 'block'} : {display: 'none'}}>{el.answer}</p>
                            <hr style={openFaq === el.id ? {display: 'none'} : {display: 'block'}} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Faq