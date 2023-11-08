import React from 'react';
import ReviewsArr from './Etc/ReviewsArr';
import CreateReview from './Etc/CreateReview';

import styles from './Reviews.module.css'

const Reviews = () => {
    return (
        <div className={styles.reviews}>
            <ReviewsArr />
            <CreateReview />
        </div>
    );
};

export default Reviews;