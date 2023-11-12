import React, { Component } from 'react';
import { useState } from "react"
import styles from '../Reviews.module.css';

import img1 from '../../../../Images/Reviews/users photo/img1.jpg'
import img2 from '../../../../Images/Reviews/users photo/img2.jpg'
import star from '../../../../Images/Reviews/star.svg'
import btn from '../../../../Images/Reviews/button.svg'

const ReviewsArr = () => {
    const [reviewsArr, setReviewsArr] = useState([
        {
            id: 1,
            image: img1,
            rating: 4,
            description: 'Платье село отлично! Хороший материал. Буду заказывать еще, осталась очень довольна.',
            name: 'Анна Котлова',
            date: '23.05.2021'
        },
        {
            id: 2,
            image: img2,
            rating: 4,
            description: 'Заказываю постоянно одежду в этом магазине! Хорошие цены, хорошее качество! Приятные менеджеры! Все быстро, доступно, удобно! Спасибо.',
            name: 'Анна Котлова',
            date: '23.05.2021'
        },
    ])
    
    
    let renderReviews = reviewsArr.map(rew => {
        return (

            <div key={rew.id} className={styles.rewCard}>
                <div>
                    <img className={styles.ava} src={rew.image} alt="" />
                </div>
                <div className={styles.rewInfo}>
                    <div className={styles.rating}>
                        {new Array(rew.rating).fill(1).map((item, index) => (
                            <img className={styles.star} src={star} alt="rating" />
                        ))}
                    </div>
                    <p className={styles.description}>{rew.description}</p>
                    <div className={styles.reviewFooter}>
                        <p className={styles.name}>{rew.name}</p>
                        <p className={styles.date}>{rew.date}</p>
                    </div>
                </div>
            </div>
        )
    })

    return (
            <div className={styles.reviews}>
                <p className={styles.reviewsLabel}>Отзывы наших покупателей</p>
                <div className={styles.mainContent}>
                    <div className={styles.reviewBox}>
                        {renderReviews}
                    </div>
                    <button className={styles.button}>
                        <img src={btn} alt="" />
                    </button>
                </div>
                
            </div>
    );
}



export default ReviewsArr;
