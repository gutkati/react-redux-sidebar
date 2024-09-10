import React from 'react';
import Category from "../category/category";
import styles from './ListCategory.module.css'
import {useSelector} from "react-redux";
import {selectAllCategories} from "../../parts/categorySlice";


const ListCategory = () => {
    const arrCategories = useSelector(state => selectAllCategories(state))

    console.log('arrCategory', arrCategories)


    return (

        <ul className={styles.list}>
            {arrCategories.map(obj => (
                <Category
                    key={obj.id}
                    text={obj.category}
                    contact={obj}
                />
            ))}
        </ul>


    );
};

export default ListCategory;