import React from 'react';
import styles from '../Welcome.module.css'

import ellipse from '../../../../Images/Welcome/ellipse.svg'
import arrow from '../../../../Images/Welcome/arrow.svg'

const CatalogBtn = () => {
    return (
        <div>
            <div className={styles.catalogBtn}>
                <img className={styles.btnEllipse} src={ellipse} />
                    {/* <svg className={styles.btnEllipse} xmlns="http://www.w3.org/2000/svg" width="193" height="193" viewBox="0 0 193 193" fill="none">
                        <circle cx="96.5" cy="96.5" r="96" stroke="#514A7E"/>
                    </svg> */}
                <p className={styles.btnText}>Каталог</p>
                <img className={styles.btnArrow} src={arrow} />
                    {/* <svg className={styles.btnArrow} xmlns="http://www.w3.org/2000/svg" width="80" height="8" viewBox="0 0 80 8" fill="none">
                        <path d="M79.3536 4.35355C79.5488 4.15829 79.5488 3.84171 79.3536 3.64645L76.1716 0.464466C75.9763 0.269204 75.6597 0.269204 75.4645 0.464466C75.2692 0.659728 75.2692 0.976311 75.4645 1.17157L78.2929 4L75.4645 6.82843C75.2692 7.02369 75.2692 7.34027 75.4645 7.53553C75.6597 7.7308 75.9763 7.7308 76.1716 7.53553L79.3536 4.35355ZM0 4.5H79V3.5H0V4.5Z" fill="#514A7E"/>
                    </svg> */}
            </div>
        </div>
    );
};

export default CatalogBtn;