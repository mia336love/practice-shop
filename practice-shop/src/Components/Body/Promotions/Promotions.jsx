import { useState } from "react"
import styles from './Promotions.module.css';

import img1 from '../../../Images/products/1.jpg'
import img2 from '../../../Images/products/2.jpg'
import img3 from '../../../Images/products/3.jpg'



let star = '.icons/star.svg'
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
            stars: '.icons/star.svg'
        },
        {
            id:2,
            image: img2,
            promoPrice: 50.00,
            oldPrice: 65.00,
            name: 'Блузка женская классная',
            stars: '.icons/star.svg'
        },{
            id:3,
            image: img3,
            promoPrice: 50.00,
            oldPrice: 65.00,
            name: 'Блузка женская классная',
            stars: '.icons/star.svg'
        },
    ])

    let mapping = promoArr.map(promo => {
      return (
        <div key={promo.id} className={styles.promoCard}>
          <img src={promo.image} alt={promo.name} />
          <p className={styles.promoPrice}>{promo.promoPrice}</p>
          <p className={styles.oldPrice}>{promo.oldPrice}</p>
          <p className={styles.promoProdName}>{promo.name}</p>
          <p className={styles.stars}>{promo.stars}</p>
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