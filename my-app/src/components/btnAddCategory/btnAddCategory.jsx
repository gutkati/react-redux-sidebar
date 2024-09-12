import React, {useState} from 'react';
import styles from './BtnAddCategory.module.css'
import {useSelector, useDispatch} from "react-redux";
import {selectAllCategories} from "../../parts/categorySlice";
import Category from "../category/category";
import {categoryAdded} from "../../parts/categorySlice";

const BtnAddCategory = () => {
    const arrCategories = useSelector(state => selectAllCategories(state))

    const [newCategory, setNewCategory] = useState('')
    const [message, setMessage] = useState('')
    const contacts = []

    const onNewCategoryChange = (e) => setNewCategory(e.target.value)

    const dispatch = useDispatch()

    function addCategory() {

        if (arrCategories.some(el => el.category === newCategory)) {
            setMessage(<span className={styles.span}>Такая категория уже существует</span>)

        } else if (newCategory === '') {
            setMessage(<span className={styles.span}>Заполните поле</span>)
        } else {
            dispatch(categoryAdded(newCategory, contacts))
            setMessage('')
            setNewCategory('')
        }
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.box__input}>
                    <input
                        className={styles.input}
                        type="text"
                        name=""
                        id=""
                        placeholder='Добавить категорию'
                        value={newCategory}
                        onChange={onNewCategoryChange}
                    />
                </div>


                <button className={styles.btn}
                        onClick={addCategory}
                        type='submit'
                />

            </div>
            {message}
        </>
    );
};

export default BtnAddCategory;