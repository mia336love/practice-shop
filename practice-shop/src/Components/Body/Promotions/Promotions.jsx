import { useState } from "react"
import styles from './Promotions.module.css';

import img1 from '../../../Images/Promotions/products/1.jpg'
import img2 from '../../../Images/Promotions/products/2.jpg'
import img3 from '../../../Images/Promotions/products/3.jpg'
import img4 from '../../../Images/Promotions/products/4.jpg'


import heart from '../../../Images/Promotions/icons/heart.svg'
import cart from '../../../Images/Promotions/icons/cart.svg'
import star from '../../../Images/Promotions/icons/star.svg'
// import star from '../../../../Images/'

// import star from '../../../Images/products/star.svg'




const Promotions = () => {

// пикча, цена по скидке, старая цена, название, 
// в избранное, в корзину, подробнее, рейтинг
    const [promoArr, setPromo] = useState([
        {
            id:1,
            image: img1,
            promoPrice: 50.00,
            oldPrice: 65.00,
            name: 'Блузка женская классная',
            rating: 4
        },
        {
            id:2,
            image: img2,
            promoPrice: 50.00,
            oldPrice: 65.00,
            name: 'Блузка женская классная',
            rating: 4
        },
        {
            id:3,
            image: img3,
            promoPrice: 50.00,
            oldPrice: 65.00,
            name: 'Блузка женская классная',
            rating: 4
        },
        {
          id:4,
          image: img4,
          promoPrice: 50.00,
          oldPrice: 65.00,
          name: 'Блузка женская классная',
          rating: 4
      },
    ])

    let mapping = promoArr.map(promo => {
      return (
        <div key={promo.id} className={styles.promoCard} >
          <div className={styles.promoCardInfo}>
            <img src={promo.image} alt={promo.name} />
            <div className={styles.prices}>
              <p className={styles.promoPrice}>{promo.promoPrice}</p>
              <s className={styles.oldPrice}>{promo.oldPrice}</s>
            </div>
            
            <p className={styles.promoProdName}>{promo.name}</p>
            {/* <p className={styles.rating}>{promo.rating}</p> */}
            <div className={styles.rating}>
                {new Array(promo.rating).fill(1).map((item, index) => (
                    <img className={styles.star} src={star} alt="rating" />
                ))}
              </div>

          </div>

          <div className={styles.promoCardBtns}>
            {/* buttons */}
            <button className={styles.likeBtn}>
              <img src={heart} alt="add to favorite" />
            </button>
            <button className={styles.cartBtn}>
              <img src={cart} alt="add to cart" />
            </button>
          </div>

        </div>

      );
    })

    return (
      <div className={styles.promotions}>
        <div className={styles.promoHeading}>
          <p className={styles.buy}>Успей купить!</p>
          <p className={styles.sales}>Акции</p>
        <div/>
        <div className={styles.promoBox}>
          {mapping}
        </div>
        </div>
      </div>
    );
}



export default Promotions;