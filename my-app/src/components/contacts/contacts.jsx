import React from 'react';
import styles from './Contacts.module.css'

const Contacts = () => {
    return (
        <div className={styles.contacts}>
            <thead>
            <table className={styles.table}>
                <tr>
                    <th className={styles.header}>Имя</th>
                    <th className={styles.header}>Описание</th>
                    <th className={styles.header}>Контакты</th>
                </tr>

                <tr className={styles.cell}>
                    <td>Катя</td>
                    <td>Сестра</td>
                    <td>8-000-200-11-00</td>
                    <td/>
                    <td/>
                </tr>
                <tr className={styles.cell}>
                    <td>Женя</td>
                    <td>Брат</td>
                    <td>8-000-200-11-00</td>
                    <td/>
                    <td/>
                </tr>
            </table>

            </thead>
        </div>

    );
};

export default Contacts;