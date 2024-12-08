import React from 'react';
import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header__container}>
                <h1 className={styles.header__title}>Менеджер контактов полезных людей</h1>
            </div>

        </div>
    );
};

export default Header;