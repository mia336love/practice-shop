import React, { Component } from 'react';
import styles from '../Footer.module.css'

const Contact = () => {
        return (
                <div className={styles.footContact}>
                    <p className={styles.footLabel}>Контактная информация</p>
                    <p className={styles.ip}>ИП Вишневский Иван Сергеевич <br />
                    государственная регистрация №690867884 от 31.07.2020. <br />
                    Логойским горисполкомом <br />
                    Защита прав потребителей +375259990755</p>
                </div>
        );
}

export default Contact;