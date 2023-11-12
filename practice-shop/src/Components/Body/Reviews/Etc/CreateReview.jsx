import React, { Component } from 'react';
import addReviewBtn from '../../../../Images/Reviews/addReviewBtn.svg'
import reviewrPhoto from '../../../../Images/Reviews/reviewrPhoto.jpg'

import styles from '../Reviews.module.css'
import btn from '../../../../Images/Reviews/btn.png'

class CreateReview extends Component {
    render() {    
        return (
            <div>
                <button>
                    <img className={styles.sendReviewBtn} src={btn} alt="Отправить отзыв" />
                </button>
            </div>
        );
    }
}

export default CreateReview;