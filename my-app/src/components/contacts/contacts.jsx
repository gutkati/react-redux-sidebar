import React, {useState} from 'react';
import styles from './Contacts.module.css'
import {useSelector} from "react-redux";
import {selectAllCategories, selectContactsId, selectCategoryById} from "../../parts/categorySlice";
import {useParams} from "react-router-dom";
import PopupWithForm from "../popupWithForm/popupWithForm";
import PopupContacts from "../popupContacts/popupContacts";

const Contacts = () => {
    let params = useParams()
    const {contactId} = params

    const [isOpenPopupAddContact, setIsOpenPopupAddContact] = useState(false)

    const titleCategory = useSelector(state => selectCategoryById(state, contactId))

    // получить массив контактов из категории
    const dataContacts = useSelector((state) => selectContactsId(state, contactId))

    console.log('dataContacts', dataContacts)
    console.log('titleCategory', titleCategory)

    const cellTable = dataContacts.contacts.map(contact => (
        <tr key={contact.id} className={styles.cell}>
            <td>{contact.name}</td>
            <td>{contact.description}</td>
            <td>{contact.phone}</td>
            <td className={styles.btn__style}/>
            <td className={styles.btn__style}/>
        </tr>
    ))

    function handleOpenPopupContacts() {
        setIsOpenPopupAddContact(true)
    }

    function handleClosePopup() {
        setIsOpenPopupAddContact(false)
    }

    return (
        <div className={styles.contacts}>
            <h2 className={styles.title}>{titleCategory.category}</h2>

            <div className={styles.container__btn}>
                <button
                    className={styles.btn__add}
                    type='submit'
                    onClick={handleOpenPopupContacts}
                />
            </div>


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


            <PopupContacts
                isOpen={isOpenPopupAddContact}
                dataContacts={dataContacts}
                onClose={handleClosePopup}
            />
        </div>

    );
};

export default Contacts;