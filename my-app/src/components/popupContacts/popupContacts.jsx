import React, {useState} from 'react';
import PopupWithForm from "../popupWithForm/popupWithForm";
import Input from "../input/input";
import styles from './PopupContacts.module.css'
import {useDispatch} from "react-redux";

const PopupContacts = ({isOpen, dataContacts, onClose,}) => {

    const [valueName, setValueName] = useState('')
    const [valueDescription, setValueDescription] = useState('')
    const [valuePhone, setValuePhone] = useState('')

    const onNameChange = (e) => setValueName(e.target.value)
    const onDescriptionChange = (e) => setValueDescription(e.target.value)
    const onPhoneChange = (e) => setValuePhone(e.target.value)

    console.log('dataContacts-contact', dataContacts)

    const dispatch = useDispatch()

    dataContacts.map(contact => {

    })

    return (
        <PopupWithForm
            isOpen={isOpen}
            onClose={onClose}
            // onSave={onSaveEditCard}
            title={dataContacts.category}
            titleBtn='Сохранить'
        >
            <div className={styles.inputs__form}>
                <div className={styles.container__input}>
                    <label htmlFor="photoUser">Имя</label>
                    <Input
                        name='photoUser'
                        id='photoUser'
                        value={valueName}
                        onChange={onNameChange}
                    />
                </div>
                <div className={styles.container__input}>
                    <label htmlFor="yearPhoto">Описание</label>
                    <Input
                        name='yearPhoto'
                        id='yearPhoto'
                        value={valueDescription}
                        onChange={onDescriptionChange}
                    />
                </div>

                <div className={styles.container__input}>
                    <label htmlFor="location">Телефон</label>
                    <Input
                        name='location'
                        id='location'
                        value={valuePhone}
                        onChange={onPhoneChange}
                    />
                </div>
            </div>
        </PopupWithForm>
    );
};

export default PopupContacts;