import React from 'react';
import styles from '../Welcome.module.css'

import ellipse from '../../../../Images/Welcome/ellipse.svg'
import arrow from '../../../../Images/Welcome/arrow.svg'
import catalogBtn from '../../../../Images/Welcome/catalog-btn.svg'
const CatalogBtn = () => {
    return (
        <div className={styles.catalogWelcome}>
            {/* <div className={styles.catalogBtn}>
                <img className={styles.btnEllipse} src={ellipse} />
                    
                <p className={styles.btnText}>Каталог</p>
                <img className={styles.btnArrow} src={arrow} />
                    
            </div> */}

            <button className={styles.catalogBtn}>
                <img src={catalogBtn} alt="" />
            </button>
            
        </div>
    );
};

export default CatalogBtn;