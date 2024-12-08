import React, {useState} from 'react';
import PopupWithForm from "../popupWithForm/popupWithForm";
import Input from "../input/input";
import styles from './PopupContacts.module.css'
import {useDispatch, useSelector} from "react-redux";
import {contactsAdded, selectCategoryById} from "../../parts/categorySlice";
import {useParams} from "react-router-dom";

const PopupContacts = ({isOpen, dataContacts, onClose, id}) => {

    let params = useParams()
    const {contactId} = params

    console.log('categoryId', contactId)

     const categoryNow = useSelector(state => selectCategoryById(state, contactId))

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [phone, setPhone] = useState('')

    const onNameChange = (e) => setName(e.target.value)
    const onDescriptionChange = (e) => setDescription(e.target.value)
    const onPhoneChange = (e) => setPhone(e.target.value)

    console.log('dataContacts-contact', dataContacts)

    const dispatch = useDispatch()

    function addNewContact(e) {
        e.preventDefault()
        if (name && description && phone) {
            dispatch(contactsAdded(contactId, name, description, phone))
            onClose()
        }


    }

    return (
        <PopupWithForm
            isOpen={isOpen}
            onClose={onClose}
            onSave={addNewContact}
            title={dataContacts.category}
            titleBtn='Сохранить'
        >
            <div className={styles.inputs__form}>
                <div className={styles.container__input}>
                    <label htmlFor="nameContact">Имя</label>
                    <Input
                        name='nameContact'
                        id='nameContact'
                        value={name}
                        onChange={onNameChange}
                    />
                </div>
                <div className={styles.container__input}>
                    <label htmlFor="descContact">Описание</label>
                    <Input
                        name='descContact'
                        id='descContact'
                        value={description}
                        onChange={onDescriptionChange}
                    />
                </div>

                <div className={styles.container__input}>
                    <label htmlFor="phoneContact">Телефон</label>
                    <Input
                        name='phoneContact'
                        id='phoneContact'
                        value={phone}
                        onChange={onPhoneChange}
                    />
                </div>
            </div>
        </PopupWithForm>
    );
};

export default PopupContacts;