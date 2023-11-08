import React, { Component } from 'react';
import { useState } from "react"
import styles from '../Reviews.module.css';

import img1 from '../../../../Images/Reviews/users photo/img1.jpg'
import img2 from '../../../../Images/Reviews/users photo/img2.jpg'

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
                <div>{rew.rating}</div>
                <img className={styles.avatar} src={rew.image} alt={rew.name} />
                <p className={styles.description}>{rew.description}</p>
                <p>{rew.name}</p>
                <p>{rew.date}</p>
            </div>
        )
    })

    return (
            <div className={styles.reviews}>
                <p className={styles.reviewsLabel}>Отзывы наших покупателей</p>
                <div className={styles.reviewBox}>
                    {renderReviews}
                </div>
            </div>
    );
}



export default ReviewsArr;
