import React from 'react';
import styles from './Contacts.module.css'
import {useSelector} from "react-redux";
import {selectAllCategories, selectContactsId} from "../../parts/categorySlice";
import {useParams} from "react-router-dom";

const Contacts = () => {
    let params = useParams()
    const {contactId} = params

    console.log('contactId', contactId)

    const dataContacts = useSelector((state) => selectContactsId(state, contactId))

    console.log('dataContacts', dataContacts)


    console.log('dataContacts2', dataContacts.contacts)

        const cellTable = dataContacts.contacts.map(contact => (
            <tr key={contact.id} className={styles.cell}>
                <td>{contact.name}</td>
                <td>{contact.description}</td>
                <td>{contact.phone}</td>
                <td className={styles.btn__style}/>
                <td className={styles.btn__style}/>
            </tr>
        ))


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
                {cellTable}
                </tbody>
            </table>
        </div>

    );
};

export default Contacts;