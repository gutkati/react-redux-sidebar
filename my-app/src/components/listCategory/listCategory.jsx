import React from 'react';
import Category from "../category/category";
import styles from './ListCategory.module.css'

const ListCategory = () => {
    return (
        <ul className={styles.list}>
            <Category text="Семья"/>
            <Category text="Друзья"/>
            <Category text="Работа"/>
        </ul>
    );
};

export default ListCategory;