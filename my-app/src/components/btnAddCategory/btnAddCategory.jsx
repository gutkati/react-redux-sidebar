import React from 'react';
import styles from './BtnAddCategory.module.css'

const BtnAddCategory = () => {
    return (
        <div className={styles.container}>
            <div className={styles.box__input}>
                <input
                    className={styles.input}
                    type="text"
                    name=""
                    id=""
                    placeholder='Добавить категорию'
                />
            </div>


            <button className={styles.btn}/>


        </div>
    );
};

export default BtnAddCategory;