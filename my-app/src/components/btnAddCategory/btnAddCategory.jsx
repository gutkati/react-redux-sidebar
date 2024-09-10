import React, {useState} from 'react';
import styles from './BtnAddCategory.module.css'
import {useSelector, useDispatch} from "react-redux";
import {selectAllCategories} from "../../parts/categorySlice";
import Category from "../category/category";
import {categoryAdded} from "../../parts/categorySlice";

const BtnAddCategory = () => {
    const arrCategories = useSelector(state => selectAllCategories(state))

    const [newCategory, setNewCategory] = useState('')
    const contacts = []

    const onNewCategoryChange = (e) => setNewCategory(e.target.value)


    console.log('newCategory', arrCategories)

    const dispatch = useDispatch()

    function addCategory() {
        dispatch(categoryAdded(newCategory, contacts))
    }

    return (
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
    );
};

export default BtnAddCategory;