import React from 'react';
import styles from './Contacts.module.css'

const Contacts = () => {
    return (
        <div className={styles.contacts}>
            <h2 className={styles.title}>Семья</h2>

            <table className={styles.table}>
                <thead>
                <tr>
                    <th className={styles.header}>Имя</th>
                    <th className={styles.header}>Описание</th>
                    <th className={styles.header}>Контакты</th>
                </tr>
                </thead>

                <tbody>
                <tr className={styles.cell}>
                    <td>Катя</td>
                    <td>Сестра</td>
                    <td>8-000-200-11-00</td>
                    <td className={styles.btn__style}/>
                    <td className={styles.btn__style}/>
                </tr>
                <tr className={styles.cell}>
                    <td>Женя</td>
                    <td>Брат</td>
                    <td>8-000-200-11-00</td>
                    <td className={styles.btn__style}/>
                    <td className={styles.btn__style}/>
                </tr>
                </tbody>
            </table>
        </div>

    );
};

export default Contacts;