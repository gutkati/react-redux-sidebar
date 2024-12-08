import React from 'react';
import styles from './PopupWithForm.module.css'

const PopupWithForm = (props) => {
    return (
        <div className={`${styles.popup} ${props.isOpen ? styles.popup_opened : ""}`}>
            <div className={styles.popup__form}>
                <button className={styles.popup__close} onClick={props.onClose} type='button'>✖</button>
                <form action="" className={styles.form} onSubmit={props.onSubmit}>
                    <h2>{props.title}</h2>
                    {props.children}
                    <button type='submit' className={styles.form__save} onClick={props.onSave}>{props.titleBtn}</button>
                </form>
            </div>
        </div>
    );
};

export default PopupWithForm;